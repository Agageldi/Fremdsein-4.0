
var myStyle ={		
					fillColor : defaultColor,
					weight: 1,
					opacity: 1,
					color: "black",
					fillOpacity: opacityColor
				};	
				
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
function homeOnEachFeature(feature,layer){
	var id = layer._leaflet_id;
	var id2 = world_id.indexOf(idConverter(id))
	//myLayer[id2].openPopup
	layer.on({
		mouseover: highlightFeatureHome,
		mouseout: resetHighlightHome,
        click: selectFeatureHome
	});
	
}

for(var i=0;i<world.features.length;i++)
{
	if(world.features[i].properties.ADMIN !='Antarctica') myLayer.push( L.geoJSON(world.features[i],{style:myStyle, onEachFeature:onEachFeature}));
	else myLayer.push( L.geoJSON(world.features[i],{style:myStyle}));
	if(world.features[i].properties.ADMIN !='Antarctica') myLayer1.push( L.geoJSON(world.features[i],{style:myStyle, onEachFeature:homeOnEachFeature}));
	else myLayer1.push( L.geoJSON(world.features[i],{style:myStyle}));
	myLayer[i].addTo(mymap);
	myLayer1[i].addTo(mymap1);
	//myLayer[i].bindPopup(world.features[i].properties.ADMIN + "   " + i+"  Center: "+world.features[i].properties.Longtitude+" " +world.features[i].properties.Latitude);
	world_names.push(world.features[i].properties.ADMIN)
	world_var[0].push(world.features[i].properties.Longtitude)
	world_var[1].push(world.features[i].properties.Latitude)
	world_code.push(world.features[i].properties.ISO_A3)
	
	world_id.push(myLayer[i]._leaflet_id)
	world_id2.push(myLayer1[i]._leaflet_id)
}
					
//var myLayer = L.geoJSON(world,{style:myStyle},{onEachFeature:onEachFeature}).addTo(mymap);
//Grayscale basemap.
//click popup + click display


