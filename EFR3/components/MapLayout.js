var testa = [];
var testb = [];



function onEachFeature(feature,layer){
	var id = layer._leaflet_id;
	var id2 = world_id.indexOf(idConverter(id))
	//myLayer[id2].openPopup
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
        click: selectFeature
	});
}
var mapScales=[]
var mapScaleN=[]

for(i=0;i<10000;i++){
	mapScaleN.push(i+1)
	mapScales.push((10000-i)*100)
}
//mapScales = [100000, 40000,35000,31000,30000,29000,28000,27000,26000,25000,24000,23000,22000,20000 ,15000,15000,10000,5000, 3000, 2000,1000,100]


var world_names = []
var world_iso3 =[]
var world_var = [[],[]]

for(var i=0;i<world.features.length;i++){
	world_names.push(world.features[i].properties.ADMIN)
	world_var[0].push(world.features[i].properties.Longtitude)
	world_var[1].push(world.features[i].properties.Latitude)
	
	world_iso3.push(world.features[i].properties.ISO_A3)
}


for(var i=1;i<=3;i++)
for(var j=1;j<=5;j++){
	
	var mapid='map'+i+""+j
	var array
		if(i==1) array=arrangment1;
		if(i==2) array=arrangment2;
		if(i==3) array=arrangment3;
	
	var index=world_names.indexOf(array[j-1]);
	//L.geoJSON(world.features[index]
	//document.getElementById(id).style.background-color = "rgba(255,0,0,1.0)"
	
	//Title on abbr
	var HANDler = document.getElementsByClassName("slider"+i)
	HANDler[j-1].innerHTML = "<p>"+world_iso3[index]+"</p>"
	
	
	//center points
	var lat = clat[selected_countries.indexOf(array[j-1])]
	var lng = clan[selected_countries.indexOf(array[j-1])]
	
	//lat=0; lng=0;
 	
	
	var crs = new L.Proj.CRS('ESRI:54009', '+proj=moll +lon_0='+lng+' +x_0='+lat+' +y_0='+lng+' +ellps=WGS84 +datum=WGS84 +units=m no_defs', 
	{ 
	resolutions: mapScales,	//[100000, 40000,25000,10000,5000, 3000, 2000,1000,100],//zoomlevel
	//scales: mapScaleN,
	origin: [0, 0]})
	
	
	var mymap = L.map(mapid, { 
		crs: crs , 
		zoomControl:false, scrollWheelZoom: false
		})
		//turn off panning function of the map
		mymap.dragging.disable();
		//double click zoom
		mymap.doubleClickZoom.disable(); 
		
		//mymap.setView([15, 10], 1);

	var myStyle ={		
						fillColor :  "rgb(102,179,211)",	//"#ffff66", 	
						weight: 0.5,
						opacity: 1,
						color: "black",
						fillOpacity: 1
					};	
					

	
	
		
	
	var myLayer = ( L.geoJSON(world.features[index],{style:myStyle}));
	
		myLayer.addTo(mymap);
	
		if(j<6) {
		testa.push(myLayer)  
		testb.push(mymap)
	}
	
			
		//mymap.setView([world_var[1][index],world_var[0][index]],2)
	mymap.fitBounds(myLayer.getBounds());
	
	// change scale
//	if(mymap.getZoom() > 9980) mymap.setZoom((mymap.getZoom()-30))
	

	$("#name"+i+""+j).html(world_names[index])
	
	if('Russia'==world_names[index]){
		mymap.fitBounds([
			[41,40],
			[70,187]
		])
	}
	if('United States of America'==world_names[index]){
		mymap.fitBounds([
			[52,-127],
			[22,-65]
		])
	}
	if('Canada'==world_names[index]){
		mymap.fitBounds([
			[75,-135],
			[42,-35]
		])
	}
	/*
	console.log('Layer' + world_names[index])
	console.log( myLayer.getBounds())
	console.log('Map' + world_names[index])
	console.log(mymap.getBounds())
	*/
}




//----print

var homeEl = document.getElementById('homeTitle')
var dataEl = document.getElementById('dataTitle')



homeEl.innerHTML = 'I am from ' +HOME
var d = new Date()

var day= d.getDate();
if(day<10) day='0'+day

var month= d.getMonth()+1;
if(month<10) month='0'+month

var min= d.getMinutes();
if(min<10) min='0'+min

var hour= d.getHours();
if(hour<10) hour='0'+hour




dataEl.innerHTML = '<i>'+' '+day + '.'+month +'.'+d.getFullYear() + '&nbsp;&nbsp;&nbsp;'  + hour + ':' + min+'</i>'



var doc = document.getElementById('mainBox')
var c 
/*
html2canvas(doc,{
	allowTaint: false,
	useCORS:true,
	onrendered:function(canvas){
		c = canvas
		var img = canvas.toDataURL('image/png');
		var pdf = new jsPDF();
		pdf.addImage(img, 'JPEG' , 20,20 );
		pdf.save('test.pdf');
	}
})
*/

/*
domtoimage.toJpeg(doc, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
*/