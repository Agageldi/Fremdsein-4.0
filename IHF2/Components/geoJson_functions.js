//Mollweide Projection
var defaultColor= "white" //"#ffff66"
var hoverColor="#db0031"
var selectedColor = "green"
var opacityColor = 1 

var d=0;

var homeCounId = 342; //layer._leaflet_id
var myLayer=[];
var myLayer1=[];
var world_id= []
var world_id2 =[]
var world_names = []
var world_code = []
var world_var=[[],[]]


var HOME

var selectedShapes = []

var crs = new L.Proj.CRS('ESRI:54009', '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m no_defs', { 
	resolutions: [20000,15000,10000,7500],//zoomlevel
	//scales: [ 1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
	origin: [0, 0]
})

var mymap1 = L.map('mapid1', {
	crs: crs,
	maxZoom:3
	})
	mymap1.setView([0, 0], 0);
	
	
		
var layers_grid = L.geoJSON(false, {
	style: function(feature) { return feature.properties}
	}).bindTooltip(function (layer) {
		return String(layer.feature.properties.NAME_LONG); // Needs to be a string
	} //, {permanent: true, opacity: 0.5}
	).addTo(mymap1);

var oceanArray =[]

for(var i=-89.99;i<90;i+=0.1){
	oceanArray.push([-179.99,i])
}
for(var i=89.99;i>-90;i-=0.1){
	oceanArray.push([179.99,i])
}
oceanArray.push([-179.99,-89.99])

var backgroundOcean = {    
	"type": "Feature",
    "properties": {"type": "ocean"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [oceanArray]
    }}

var oceanStyle ={		
		fillColor : "lightblue",
		weight: 1,
		opacity: 1,
		color: "lightblue",
		fillOpacity: opacityColor
		};	

L.geoJSON(backgroundOcean, {style: oceanStyle}).addTo(mymap1)
	
L.graticule({ interval: 20 }).addTo(mymap1);

		// Specify bold red lines instead of thin grey lines
		L.graticule({
			style: {
				color: '#8d8d8d',
				weight: 1
			}
		}).addTo(mymap1);
	
	//L.control.scale().addTo(mymap);
	
/*
var mymap=L.map('mapid').setView([ 15, 10],2);
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 6,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWdhZ2VsZGkiLCJhIjoiY2phbm5pcTRhM2ZpNDJxcnphbnk4bXhiaSJ9.4EoCP0AuZHTMY8pA0VO8Ew'
}).addTo(mymap);
*/

//id corrector of layer on the map to the layer had been loaded to the map
function idConverter(a){
	return a+1
}

//Convert selected countries in to an array of their names.
function convertToName(array){
	
	var selectedNames = []
	
	for(var i=0;i<array.length;i++)
	{
		var id = idConverter(array[i]);
		var id2 = world_id.indexOf(id);
		//console.log(typeof(id)+"  " +typeof(world_id[100]));
		selectedNames.push(world_names[id2]);
	}
	//console.log(selectedNames);
	return selectedNames;
}
function convertToCenterPoints(array){
	var centerP = [[],[]]
	
	for(var i=0;i<array.length;i++)
	{
		var id = idConverter(array[i]);
		var id2 = world_id.indexOf(id);
		//console.log(typeof(id)+"  " +typeof(world_id[100]));
		centerP[0].push(world_var[0][id2]);
		centerP[1].push(world_var[1][id2]);
	}
	//console.log(selectedNames);
	return centerP;
	
}

function activeCountries(array){
	var str = "country";
	array =convertToName(array);
	for(var i=0;i<array.length;i++)
	{
		document.getElementById(str+String(i+1)).innerHTML = array[i];
	}
	for(var i= array.length;i<5;i++)
	{
		document.getElementById(str+String(i+1)).innerHTML = "empty";
	}
}

// useless function, just to test
function test(e){
	var layer=e.target;
	//myLayer[183]._popup._contentNode
}

//mouse hover functions
function highlightFeature(e) {
    var layer = e.target;
	var id= layer._leaflet_id
	var id2 = world_id.indexOf(idConverter(id));
	
	//myLayer[id2].openPopup();
	$("#gap1").html("Country: " + world_names[id2]+" "+layer._leaflet_id);
	if(selectedShapes.indexOf(id) === -1)
	{	
			layer.setStyle({
				fillColor: hoverColor,
				weight: 2,
				opacity: 1,
				color: "black",
				dashArray: '',
				fillOpacity: opacityColor
			});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}
	}
	//additional functionalities
	
	
//	myLayer[183]._popup._contentNode.onmouseenter = test(e);
}
function resetHighlight(e) {
    var layer = e.target;
	var id= layer._leaflet_id
	if(selectedShapes.indexOf(id) === -1)
	{
		layer.setStyle({
			fillColor: defaultColor,
			weight: 1,
			opacity: 1,
			color: "black",
			dashArray: '',
			fillOpacity: opacityColor
		});
	}
}

function selectFeature(e) {
    var layer = e.target;
	var id= layer._leaflet_id
	if(selectedShapes.indexOf(id) > -1)
	{	
		selectedShapes.splice(selectedShapes.indexOf(id),1);
		e.target.setStyle({
			fillColor: hoverColor,
			weight: 2,
			opacity:1,
			color: "black",
			dashArray: '',
			fillOpacity: opacityColor
			
		});
		
		d-=1;
		activeCountries(selectedShapes);
	}else
	if(d<5){
		selectedShapes.push(id);
		d+=1;
		activeCountries(selectedShapes);
		e.target.setStyle({
			fillColor: selectedColor,
			weight: 1,
			opacity:1,
			color: "black",
			dashArray: '',
			fillOpacity: opacityColor
		});
	}
	document.getElementById("info").innerHTML = "Selected country number: " + d
}


//onEachFeature functions for Home madol


function highlightFeatureHome(e) {
    var layer = e.target;
	var id= layer._leaflet_id
	
	if(HOME==null || layer._leaflet_id != HOME._leaflet_id)
	{	
			layer.setStyle({
				fillColor: hoverColor,
				weight: 2,
				opacity: 1,
				color: "black",
				dashArray: '',
				fillOpacity: opacityColor
			});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}
	}
	//additional functionalities

//	myLayer[183]._popup._contentNode.onmouseenter = test(e);
}

function resetHighlightHome(e) {
    var layer = e.target;
	var id= layer._leaflet_id
	if(HOME==null || layer._leaflet_id != HOME._leaflet_id)
	{
		layer.setStyle({
			fillColor: defaultColor,
			weight: 1,
			opacity: 1,
			color: "black",
			dashArray: '',
			fillOpacity: opacityColor
		});
	}
}

function selectFeatureHome(e) {
    var layer = e.target;
	var id= layer._leaflet_id
	
	
	if(HOME!=null) 
		HOME.setStyle({
			fillColor: defaultColor,
			weight: 1,
			opacity:1,
			color: "black",
			dashArray: '',
			fillOpacity: opacityColor
		})
		
	HOME=layer;
	
	e.target.setStyle({
			fillColor: selectedColor,
			weight: 1,
			opacity:1,
			color: "black",
			dashArray: '',
			fillOpacity: opacityColor
		});
	
	var id0 = idConverter(id);
	var id2 = world_id2.indexOf(id0);
	document.getElementById("modal-temp").innerHTML = ""+world_names[id2].split('_').join(' ')
	document.getElementById("modal-temp").style.opacity = '1.0'
}
