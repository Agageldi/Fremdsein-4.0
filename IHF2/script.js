var imageName
var country_class=[];//for absolute calculated values
var country_class2=[];//for actual calculated country values
var country_class3=[];//for actual calculated country values with 0 instead of 100000

var country_value_aga = [[],[]] //[[name],[value]]

var countries_best = [[],[],[]]

var value1 = localStorage.getItem('value1');
var value2 = localStorage.getItem('value2');
var value3 = localStorage.getItem('value3');
var value4 = localStorage.getItem('value4');
var value5 = localStorage.getItem('value5');
var value6 = localStorage.getItem('value6');

var weight1 = parseFloat(localStorage.getItem('weight1'));
var weight2 = parseFloat(localStorage.getItem('weight2'));
var weight3 = parseFloat(localStorage.getItem('weight3'));
var weight4 = parseFloat(localStorage.getItem('weight4'));
var weight5 = parseFloat(localStorage.getItem('weight5'));
var weight6 = parseFloat(localStorage.getItem('weight6'));


var L_myLayer = []
var L_myFeature = []


var homecountry = localStorage.getItem('homecountry');
homecountry = homecountry.split(' ').join('_')


var geodata2 = localStorage.getItem('geodata2');

geodata2=JSON.parse(geodata2)

geodata2 =geodata



var a = [0,0,0,0,0,0]
var original_a = [value1,value2,value3,value4,value5,value6];

var stats_series_1//homecountry
var stats_series_2//user input
var stats_series_3//most fitting
var stats_series_4//var least fitting


var classification_value_old
var classification_value
var user_value
var official_value

var fields_list = ["FIELD2","FIELD3","FIELD4","FIELD5","FIELD6","FIELD7"];

var comment = ""
var countries_list = ["Albania","Angola","Argentina","Australia","Austria","Bangladesh","Belgium","Brazil","Bulgaria","Burkina_Faso","Canada","Cape_Verde","Chile","China","Colombia","Croatia","Czech_Republic","Denmark","Dominican_Republic","Egypt","El_Salvador","Estonia","Finland","France","Germany","Ghana","Greece","Hong_Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Italy","Japan","Jordan","Latvia","Lebanon","Libya","Lithuania","Luxembourg","Malaysia","Malta","Mexico","Marocco","Mozambique","Netherlands","New_Zealand","Nigeria","Norway","Pakistan","Peru","Philippines","Poland","Portugal","Puerto_Rico","Romania","Russia","Saudi_Arabia","Serbia","Singapore","Slovakia","Slovenia","South_Africa","South_Korea","Spain","Sweden","Switzerland","Taiwan","Tanzania","Thailand","Trinidad_and_Tobago","Turkey","Ukraine","United_Kingdom","United_States_of_America","Uruguay","Venezuela","Vietnam","Zambia"];
	

function getDBValue(selection){ // reads values from db and calculates them with weighting and later user input
	
	user_value = value1*weight1+
				value2*weight2+
				value3*weight3+
				value4*weight4+
				value5*weight5+
				value6*weight6

	

	//arrays für länder und feldnamen, durch länder und feldnamen mit for iterieren	

	var ccount;
	var fcount;
	
	var jpathbase;
	var jpath;
	var jpath2;
	
	var values_for_calculation=[];
	
	//for (ccount = 0; ccount < countries_list.length; ccount++) {
			
		jpathbase = 'Database.' + selection + '.';
		if(selection in Database){//testing if the selected country exists in hofstede database
		
		
			for (fcount = 0; fcount < fields_list.length; fcount++) {
				
				
				
				
				jpath = jpathbase + fields_list[fcount];
				
				

					jpath2 = parseInt(eval(jpath))
					
					
					
					values_for_calculation.push(jpath2);
					
					if (fcount == 5){
							
						//console.log(selection + " " + values_for_calculation);
						
						//country value calculation
						//value classification
						//adding value to classification array
						
						
						
							
						official_value = values_for_calculation[0]*weight1+
												values_for_calculation[1]*weight2+
												values_for_calculation[2]*weight3+
												values_for_calculation[3]*weight4+
												values_for_calculation[4]*weight5+
												values_for_calculation[5]*weight6
						
						//console.log("Classification value " +classification_value)	
						
						
						var v1=Math.abs(value1*weight1-values_for_calculation[0]*weight1)
						var v2=Math.abs(value2*weight2-values_for_calculation[1]*weight2)
						var v3=Math.abs(value3*weight3-values_for_calculation[2]*weight3)
						var v4=Math.abs(value4*weight4-values_for_calculation[3]*weight4)
						var v5=Math.abs(value5*weight5-values_for_calculation[4]*weight6)
						var v6=Math.abs(value6*weight6-values_for_calculation[5]*weight6)
						
						
						
						classification_value=v1+v2+v3+v4+v5+v6
						classification_value_old=Math.abs(user_value-official_value)
						
						
						//console.log("TEST"+classification_value)
						country_class.push(classification_value)
						country_class3.push(classification_value)
						country_class2.push(official_value)
						//console.log ("COUNTRYCLASS",country_class3)
						
						country_value_aga[0].push(selection)
						country_value_aga[1].push(classification_value)
						
						return classification_value;
						
						
						//clear array after calculating

						var values_for_calculation=[];
						var classification_value =0
						
					}
					
					
					
					
				
				} 
		} else {
		//console.log(selection + " does not exist")
		country_class.push(100000)
		country_class2.push(0)
		country_class3.push(0)
		return 100000
		}
		
}	//getDBvalue function
	
		
		
//__________________________DIAGRAM SCRIPT______________________________________

var options = {


//slider begriffe in legend min/max
		  // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
		  high: 100,
		  // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
		  low: 0,
		  // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
		  divisor: 5,
		  // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
		  //ticks: [1, 10, 20, 30]
		  axisY: {
    
    offset: 40
  },
  axisX: {
    offset: 70 //space for labels with weight
  }
		  
		  
		 
    //plugins: [ Chartist.plugins.legend() ]
};

var wght = parseFloat(weight1)+parseFloat(weight2)+parseFloat(weight3)+parseFloat(weight4)+parseFloat(weight5)+parseFloat(weight6)

function createDiagram2(b){
		var percentage = Math.round((100-country_value_aga[1][country_value_aga[0].indexOf(clickedCountry.split(' ').join('_'))]/wght)*10)/10
		var data = {
		  // A labels array that can contain any sort of values
		  //labels: ['power distance weight: '+weight1, 'individualism weight: '+weight2, 'masculinity weight: '+weight3, 'uncertainty avoidance weight: '+weight4, 'long-term orientation weight: '+weight5, 'indulgence weight: '+weight6],
			labels: ['power distance \n( '+weight1+' )', 'individual- ism\n( '+weight2+' )', 'masculinity\n ( '+weight3+' )', 'uncertainty avoidance\n ( '+weight4+' )', 'long-term orientation\n ( '+weight5+' )', 'indulgence\n ( '+weight6+' )'],
		  // Our series array that contains series objects or in this case series data arrays
		  series: [{'name': 'Own Input', 'data': 	original_a},
					{'name': clickedCountry , 'data': b}
		  ]
		};

		//Chart colors are edited in style.css in the '.ct-chart' class
		new Chartist.Bar('#DiagramDiv', data, options);

		
		
		
		
}  // createDiagram2 function


var mapColors=[['#a50f15','#de2d26','#fb6a4a','#fcae91','#fee5d9'],		//tested 	//red    
				["#980043", "#dd1c77", "#df65b0", "#d7b5d8", "#fee5d9"],//corrected	//red2	#f1eef6
				['#54278f','#756bb1','#9e9ac8','#cbc9e2','#e0dced'], 	//corrected //magenta   #f2f0f7#e0dced
				["#810f7c", "#8856a7", "#8c96c6", "#b3cde3", '#e0dced'],//corrected	//magenta2	#edf8fb
				["#7a0177", "#c51b8a", "#f768a1", "#fbb4b9", "#feebe2"], //tested			//magenta3
				['#a63603','#e6550d','#fd8d3c','#fdbe85','#ffffb2'],	//tested ok	//orange		#feedde
				["#bd0026", "#f03b20", "#fd8d3c", "#fecc5c", "#ffffb2"], //tested 	//orange2

				//['#252525','#636363','#969696','#cccccc','#f7f7f7'], 	//black
				['#006d2c','#31a354','#74c476','#bae4b3','#def2d7']]	//corrected//green  #edf8e9

var N = Math.round(Math.random()*mapColors.length-0.5)
var homeColor = 'green'
var homeColor2 = 'green'
if(N>6) homeColor= 'red'

function Recolor(){
	
	
	//statistic bar
	document.getElementById('statistic_most').style.backgroundColor = mapColors[N][0]
	document.getElementById('statistic_least').style.backgroundColor = mapColors[N][4]
	document.getElementById('statistic_home').style.borderColor = homeColor
	//country list
	$('body').append('<style>.country_box{background-color:'+mapColors[N][3]+';}'+
					'.country_box:hover,.country_box:focus{background-color: '+mapColors[N][1]+';}'+
					'.country_box:active{background-color: '+mapColors[N][4]+';}</style>');			
	//legend
	for(var i=0;i<5;i++)
		document.getElementById('Legend'+(i+1)).style.backgroundColor = mapColors[N][i]
	
	
		
		for (c = 0; c < geodata2.features.length; c++) {
			
		var geodata2_country = geodata2.features[c].properties.NAME_LONG
		
		//claculates value (getDBValue) and adds it to a new property in geojson
		geodata2.features[c].properties.Classification = getDBValue(geodata2_country)
		
		
		// create auztomatic equal distance classes
		//after getDB value
		var steps = (Math.max(...country_class3)-Math.min(...country_class))/5
		
		
		var class1min = Math.min(...country_class)

		var class_break_1_2 = Math.min(...country_class) + steps
		
		var class_break_2_3 = Math.min(...country_class) + steps*2

		var class_break_3_4 = Math.min(...country_class) + steps*3

		var class_break_4_5 = Math.min(...country_class) + steps*4

		var class5max = Math.max(...country_class3)
			
		//Math.min(...country_class)
		//Math.max(...country_class)
		//console.log(class_break_1_2, class_break_2_3)
		
		
		if (geodata2.features[c].properties.Classification==100000  ){
			
			geodata2.features[c].properties.Class="Class0"
			
			console.log(geodata2.features[c].properties.NAME_LONG)
			
		}
		
		//ol0-30/30-60/...
		else if (geodata2.features[c].properties.Classification>= class1min && geodata2.features[c].properties.Classification< class_break_1_2  ){
			countries_best[0].push(geodata2.features[c].properties.NAME_LONG)
			countries_best[1].push(geodata2.features[c].properties.Classification)
			countries_best[2].push(geodata2.features[c].properties.Classification)
			
			geodata2.features[c].properties.Class="Class1"
			
		}else if (geodata2.features[c].properties.Classification>= class_break_1_2 && geodata2.features[c].properties.Classification<= class_break_2_3  ){
			
			geodata2.features[c].properties.Class="Class2"
			
		}else if (geodata2.features[c].properties.Classification>= class_break_2_3 && geodata2.features[c].properties.Classification<= class_break_3_4  ){
			
			geodata2.features[c].properties.Class="Class3"
			
		}
		else if (geodata2.features[c].properties.Classification>= class_break_3_4 && geodata2.features[c].properties.Classification<= class_break_4_5  ){
			
			geodata2.features[c].properties.Class="Class4"
			
		}
		else if (geodata2.features[c].properties.Classification>= class_break_4_5 &&geodata2.features[c].properties.Classification!=100000 ){
			
			geodata2.features[c].properties.Class="Class5"
			
		}else if (geodata2.features[c].properties.Classification>= class1min && geodata2.features[c].properties.Classification< class_break_1_2 && geodata2.features[c].properties.Home==1){
			
			geodata2.features[c].properties.Class="Class1b"
			
		}else if (geodata2.features[c].properties.Classification>= class_break_1_2 && geodata2.features[c].properties.Classification<= class_break_2_3 &&geodata2.features[c].properties.Home==1){
			
			geodata2.features[c].properties.Class="Class2b"
			
		}else if (geodata2.features[c].properties.Classification>= class_break_2_3 && geodata2.features[c].properties.Classification<= class_break_3_4 &&geodata2.features[c].properties.Home==1){
			
			geodata2.features[c].properties.Class="Class3b"
			
		}
		else if (geodata2.features[c].properties.Classification>= class_break_3_4 && geodata2.features[c].properties.Classification<= class_break_4_5 &&geodata2.features[c].properties.Home==1){
			
			geodata2.features[c].properties.Class="Class4b"
			
		}
		else if (geodata2.features[c].properties.Classification>= class_break_4_5 &&geodata2.features[c].properties.Classification!=100000&&geodata2.features[c].properties.Home==1){
			
			geodata2.features[c].properties.Class="Class5b"
			
		}
		else if (geodata2.features[c].properties.Classification==100000 && geodata2.features[c].properties.Home==1){
			
			geodata2.features[c].properties.Class="Class0b"
			
		}
			
		
		
		
	//console.log(geodata2.features[c].properties.NAME_LONG)
	//console.log(geodata2.features[c].properties.Classification)
	//console.log(geodata2.features[c].properties.Class)
	}
	
	
//console.log(geodata2.features[1].properties.NAME_LONG)
	//feature.properties.Home
	function stripeColor(clr,country){
		if(country == homecountry) homeColor2 = mapColors[N][clr]
		var stripes = new L.StripePattern({
								weight:1,
								spaceWeight:10,
								color: 'grey',
								spaceColor: mapColors[N][clr],
								opacity: 1.0,
								spaceOpacity: 1.0,
								angle:-45
							});	
							stripes.addTo(map);	
							if(countries_list.indexOf(country)==-1)
								return {
									fillPattern: stripes,
									weight: 0.5,
									opacity: 1,
									color: 'black',  //Outline color
									fillOpacity: 1
								};
							else
								return {
									fillColor: mapColors[N][clr],//'#006d2c',
									weight: 0.5,
									opacity: 1,
									color: 'black',  //Outline color
									fillOpacity: 1
								};
	}
        
	//ValueCalculation();
		L.geoJson(geodata2, {
					style: function(feature) {					
						switch (feature.properties.Class) {
							
							case "Class0": return {
								fillColor:  'white',
								weight: 0.5,
								opacity: 1,
								color: 'black',  //Outline color#00491d
								fillOpacity: 1
							};
							case "Class1":   return stripeColor(0,feature.properties.NAME_LONG)
							
							case "Class2":   return stripeColor(1,feature.properties.NAME_LONG)
							
							case "Class3":   return stripeColor(2,feature.properties.NAME_LONG)
							
							case "Class4":   return stripeColor(3,feature.properties.NAME_LONG)
							
							case "Class5":   return stripeColor(4,feature.properties.NAME_LONG)
						}			
					},
					onEachFeature: onEachFeature
				
				
				
					}).addTo(map);
	L_myLayer[L_myFeature.indexOf(homecountry)].setStyle({
								weight: 2.5,
								color: homeColor,  //Outline color
								fillOpacity: 1
	})		
	document.getElementById('statistic_home').style.backgroundColor = homeColor2
}


function createStatsDiagram1(){
console.log("Hallo")
	//STILL OLD CALCULATION USING SUM
	var index_min
	var index_max
	var name_most
	var name_least
	
	var stats_series_3_placeholder
	var stats_series_4_placeholder
	
	
//Homecountry
 
  var statjpath
  var statjpath2
  var statfcount
  var stat_values_for_calculation=[];
  
  
  
	for (statfcount = 0; statfcount < fields_list.length; statfcount++) {

		statjpath = 'Database.'+homecountry+'.' + fields_list[statfcount];

			statjpath2 = parseInt(eval(statjpath))
			

			stat_values_for_calculation.push(statjpath2);
			

			if (statfcount == 5){
					
				//console.log(selection + " " + values_for_calculation);
				
				//country value calculation
				//value classification
				//adding value to classification array
				
				
				
					
				stats_series_1 = stat_values_for_calculation[0]*weight1+
										stat_values_for_calculation[1]*weight2+
										stat_values_for_calculation[2]*weight3+
										stat_values_for_calculation[3]*weight4+
										stat_values_for_calculation[4]*weight5+
										stat_values_for_calculation[5]*weight6
				
				//console.log("Classification value " +classification_value)	
				
				//country_class.push(classification_value)
				
				
				classification_value=user_value-official_value
				
				
				
			}
		
		} 

console.log("Home country: "+stats_series_1)




//User inpiut
stats_series_2=user_value
console.log("User input: "+stats_series_2)


//most fitting -> also gets name of country (currently first country with that value)
stats_series_3_placeholder=Math.min(...country_class)

index_min=country_class.indexOf(stats_series_3_placeholder)

name_most=geodata2.features[index_min].properties.NAME_LONG
stats_series_3=country_class2[index_min]
console.log("Most fitting: "+name_most)
console.log("Most fitting: "+stats_series_3)






//var least fitting -> also gets name of country (currently first country with that value)
stats_series_4_placeholder=Math.max(...country_class3)

index_max=country_class3.indexOf(stats_series_4_placeholder)

name_least=geodata2.features[index_max].properties.NAME_LONG
stats_series_4=country_class2[index_max]
console.log("Least fitting: "+name_least)
console.log("Least fitting: "+stats_series_4)
	
//labeling the legend
document.getElementById('DLegendText1').innerHTML = "Home country: " + homecountry;
//document.getElementById('DLegendText2').innerHTML = "Select your home country: " + homecountry;
document.getElementById('DLegendText3').innerHTML = "Most fitting country: " + name_most;
document.getElementById('DLegendText4').innerHTML = "Least fitting country: " + name_least;


var diagramData = {
  labels: ['Home country('+ homecountry+'), Your Input, Most fitting ('+ name_most+'), Least Fitting ('+name_least+')'],
  series: [[0],[0],[stats_series_1],[stats_series_2],[stats_series_3],[stats_series_4]
  //two empty entries because of library is difficult with colors (css for series c,d,e,f)
  ]
};
var statsOptions = {
		  // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
		  high: 600,
		  // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
		  low: 0,
		  // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
		  divisor: 5,
		  // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
		  //ticks: [1, 10, 20, 30]
		};
		
	//new Chartist.Bar('#DiagramDiv3', diagramData, statsOptions);
	
	
}
//_______________________ savedata
//savedata/userinputs.txt

/*var db = new PouchDB('C:/Users/jeja0002/Workshop/QuizApp/savedata/userInputData');

function DBRead(){
	db.allDocs({
	  include_docs: true,
	  attachments: true,
	  startkey: '0',
	  endkey: 'z'
	}).then(function (result) {
	  // handle result
	  console.log(result)
	}).catch(function (err) {
	  console.log(err);
	});
	
	
}

function DBTest(){
	
	
	//post instead of put automatically generates id

	db.post({
	  //_id: "2",
	  HomeCountry: homecountry,
	  powerDistance: value1,
	  weight1: weight1,
	  individualism: value2,
	  weight2: weight2,
	  masculinity: value3,
	  weight3: weight3,
	  uncertainty_avoidance: value4,
	  weight4: weight4,
	  longTermOrientation: value5,
	  weight5: weight5,
	  indulgence: value6,
	  weight6: weight6,
	  comment: comment
	});

	db.changes().on('change', function() {
	  //console.log('Ch-Ch-Changes');
	});

//	db.replicate.to('C:/Users/jeja0002/Workshop/QuizApp/savedata/userinputs.txt');

	db.info().then(function (info) {
	  console.log(info);
	})

	db.get('1').then(function (doc) {
	  console.log(doc);
	});
		
}

function exportDB(){
	
	db.load('C://Users/jeja0002/Workshop/QuizApp/savedata/userinputs.txt').then(function () {
	  // done loading!
	}).catch(function (err) {
	  // HTTP error or something like that
	});
		
	
}
///////////////try with sqlite

var dbPath = "C:/Users/jeja0002/Workshop/QuizApp/savedata/test.sqlite"
*/





//_________________________DIAGRAM WITH SVG_________________________________________
var svgNS = "http://www.w3.org/2000/svg";  

var bar1 = document.createElementNS(svgNS,"rect"); 
var bar2 = document.createElementNS(svgNS,"rect"); 
var bar3 = document.createElementNS(svgNS,"rect"); 
var bar4 = document.createElementNS(svgNS,"rect"); 

function createBars()
{
    //bars with data
    bar1.setAttributeNS(null,"id","bar1");
    bar1.setAttributeNS(null,"width",50);
    bar1.setAttributeNS(null,"height",stats_series_1);
    bar1.setAttributeNS(null,"fill","red");
    bar1.setAttributeNS(null,"stroke","none");
	bar1.setAttributeNS(null,"x",50);
	bar1.setAttributeNS(null,"y",600-stats_series_1);

	bar2.setAttributeNS(null,"id","bar2");
    bar2.setAttributeNS(null,"width",50);
    bar2.setAttributeNS(null,"height",stats_series_2);
    bar2.setAttributeNS(null,"fill","black");
    bar2.setAttributeNS(null,"stroke","none");
	bar2.setAttributeNS(null,"x",120);
	bar2.setAttributeNS(null,"y",600-stats_series_2);
	
	bar3.setAttributeNS(null,"id","bar3");
    bar3.setAttributeNS(null,"width",50);
    bar3.setAttributeNS(null,"height",stats_series_3);
    bar3.setAttributeNS(null,"fill","#006d2c");
    bar3.setAttributeNS(null,"stroke","none");
	bar3.setAttributeNS(null,"x",190);
	bar3.setAttributeNS(null,"y",600-stats_series_3);

  	bar4.setAttributeNS(null,"id","bar4");
    bar4.setAttributeNS(null,"width",50);
    bar4.setAttributeNS(null,"height",stats_series_4);
    bar4.setAttributeNS(null,"fill","#b2e2e2");
    bar4.setAttributeNS(null,"stroke","none");
	bar4.setAttributeNS(null,"x",260);
	bar4.setAttributeNS(null,"y",600-stats_series_4);

	
	
	document.getElementById("mySVG").appendChild(bar1);
    document.getElementById("mySVG").appendChild(bar2);
	document.getElementById("mySVG").appendChild(bar3);
	document.getElementById("mySVG").appendChild(bar4);
	
	//axis etc.
	
	var axis1 = document.createElementNS(svgNS,"line"); 
	var axis2 = document.createElementNS(svgNS,"line"); 
	
	axis1.setAttributeNS(null,"x1",335);
	axis1.setAttributeNS(null,"y1",600);
	axis1.setAttributeNS(null,"x2",25);
	axis1.setAttributeNS(null,"y2",600);
	axis1.setAttributeNS(null,"stroke-width",2);
	axis1.setAttributeNS(null,"stroke","black");
	
	axis2.setAttributeNS(null,"x1",25);
	axis2.setAttributeNS(null,"y1",25);
	axis2.setAttributeNS(null,"x2",25);
	axis2.setAttributeNS(null,"y2",600);
	axis2.setAttributeNS(null,"stroke-width",2);
	axis2.setAttributeNS(null,"stroke","black");
	
	
	document.getElementById("mySVG").appendChild(axis1);
	document.getElementById("mySVG").appendChild(axis2);
	
}  

function editCircle()
{
   
	bar2.setAttributeNS(null,"id","bar2");
    bar2.setAttributeNS(null,"width",50);
    bar2.setAttributeNS(null,"height",stats_series_2);
    bar2.setAttributeNS(null,"fill","red");
    bar2.setAttributeNS(null,"stroke","none");
	bar2.setAttributeNS(null,"x",120);
	bar2.setAttributeNS(null,"y",600-stats_series_2);

    document.getElementById("mySVG").appendChild(bar2);
}  