var oceanArray =[]


// adding background ocean
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
		fillOpacity: 1
	};	

	
