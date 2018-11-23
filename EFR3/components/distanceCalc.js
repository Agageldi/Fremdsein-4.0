function stringToFloat(array){
	for(var i = 0; i<array.length; i++)
		array[i]= parseFloat(array[i])
	
	return array;
}

function distance(lan1, lat1, lan2, lat2) {
    lan1 = Math.PI*(lan1/180);
    lat1 = Math.PI*(lat1/180);
    lan2 = Math.PI*(lan2/180);
    lat2 = Math.PI*(lat2/180);
    var deltalanda = lan2-lan1;
    var theta = Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) *        Math.cos(lat2) * Math.cos(deltalanda);
	theta = Math.acos(theta);
	var R=6370;
    var dist = R*theta;
    return Math.round(dist);
}
var centerPoints=localStorage.getItem("transfer_centerPoints");
centerPoints=centerPoints.split(",");
centerPoints = stringToFloat(centerPoints);
var clan=[]
var clat=[]
var selected_countries=localStorage.getItem("transfer_var");
var arrangment1=localStorage.getItem('transfer_arrangment1')
var arrangment2=localStorage.getItem('transfer_arrangment2')
var arrangment3=localStorage.getItem('transfer_arrangment3')


var ST1=localStorage.getItem("subTopic1").charAt(0).toUpperCase()+localStorage.getItem("subTopic1").slice(1)  //first letter uppercase
var ST2=localStorage.getItem("subTopic2").charAt(0).toUpperCase()+localStorage.getItem("subTopic2").slice(1)
var ST3=localStorage.getItem("transfer_freeTopic").charAt(0).toUpperCase() +localStorage.getItem("transfer_freeTopic").slice(1)
var ST4=localStorage.getItem("transfer_freeSubtopic").charAt(0).toUpperCase() + localStorage.getItem("transfer_freeSubtopic").slice(1)


var world_code=localStorage.getItem('transfer_world_code')

var HOME = localStorage.getItem('HOME')

if(ST1 !='') $('#T1').html($('#T1').html() + ' &mdash; '+ST1)
if(ST2 !='') $('#T2').html($('#T2').html() + ' &mdash; '+ST2)
if(ST3 !='') $("#T3").html(ST3 + ' &mdash; ' + ST4)

selected_countries=selected_countries.split(",");
arrangment1=arrangment1.split(",")
arrangment2=arrangment2.split(",")
arrangment3=arrangment3.split(",")
world_code=world_code.split(",")
/*
for(var i=0;i<arrangment1.length;i++){
	$("#arrangment1").html($("#arrangment1").html()+(i+1)+"-  "+arrangment1[i]+"     ")
	$("#arrangment2").html($("#arrangment2").html()+(i+1)+"-  "+arrangment2[i]+"     ")
	$("#arrangment3").html($("#arrangment3").html()+(i+1)+"-  "+arrangment3[i]+"     ")
}
*/
for(var i = 0; i<centerPoints.length/2;i++){
	clan.push(centerPoints[i])
}
for(i; i<centerPoints.length;i++){
	clat.push(centerPoints[i])
}
//var selected_countries=window.opener.selected_countries;


var homeCenterPoint = localStorage.getItem("homeCounId");
homeCenterPoint = homeCenterPoint.split(",");
homeCenterPoint = stringToFloat (homeCenterPoint)
var dist=[distance(homeCenterPoint[0],homeCenterPoint[1],clan[0],clat[0]),
			distance(homeCenterPoint[0],homeCenterPoint[1],clan[1],clat[1]),
			distance(homeCenterPoint[0],homeCenterPoint[1],clan[2],clat[2]),
			distance(homeCenterPoint[0],homeCenterPoint[1],clan[3],clat[3]),
			distance(homeCenterPoint[0],homeCenterPoint[1],clan[4],clat[4])];



//getComputedStyle(document.getElementById('first')).setProperty('--color','red')
var sumDist,d=[];

for(var i=0;i<5;i++){
	d.push(parseInt(dist[i]));
}
d.sort(function(a, b){return b - a});
d.reverse();

var rulerLength = (Math.floor(d[4]/1000)+1)*1000


sumDist = Math.max(...dist)*1.1

//document.getElementById('ruler').style.background-size = (sumDist/200)+"%"

var width=[dist[0]/rulerLength*100, dist[1]/rulerLength*100,dist[2]/rulerLength*100,dist[3]/rulerLength*100,dist[4]/rulerLength*100]


var w2=[dist[0]/rulerLength*100, dist[1]/rulerLength*100,dist[2]/rulerLength*100,dist[3]/rulerLength*100,dist[4]/rulerLength*100]

document.getElementById('tick4').setAttribute('data-value',rulerLength)
document.getElementById('tick3').setAttribute('data-value',rulerLength*.75)
document.getElementById('tick2').setAttribute('data-value',rulerLength*.5)
document.getElementById('tick1').setAttribute('data-value',rulerLength*.25)


w2.sort(function(a, b){return b-a});

for(var i=0;i<world_code.length;i++)
{

	$("#M"+(i+1)).html(world_code[i]);
	document.getElementById("M"+(i+1)).style.left = (9+width[i]*75/100)+"%"
	var h = (w2.indexOf(width[i])+1)*10
	document.getElementById("M"+(i+1)).style.height = h+"px"
	
}
/*
document.getElementById('first').style.width = width[0]+"%"
document.getElementById('second').style.width = width[1]+"%"
document.getElementById('third').style.width = width[2]+"%"
document.getElementById('forth').style.width = width[3]+"%"
document.getElementById('fifth').style.width = width[4]+"%"
*/