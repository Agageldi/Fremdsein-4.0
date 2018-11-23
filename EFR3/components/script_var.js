function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
	var data2 = event.target.id;
	if(event.target.nodeName == 'P') data2 =  event.target.parentElement.id
	
	data= "#"+data;
	data2="#"+ data2;
	var a=$(data).html();
	var b=$(data2).html();
	$(data).html(b);
	$(data2).html(a);
	
	//console.log('data ' + data+ ' '+ data2)
	//console.log('drop ' +a + ' ' + b)
	//console.log(event.target)
	
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
function allowDrop(event) {
    event.preventDefault();
}
//Selected country array comes from previous page
var selected_countries=localStorage.getItem("transfer_var");
selected_countries=selected_countries.split(",");
//var selected_countries=window.opener.selected_countries;
document.getElementById('country_list1').innerHTML='<p class="center2">' + selected_countries[0] + '</p>';
document.getElementById('country_list2').innerHTML='<p class="center2">' + selected_countries[1] + '</p>';
document.getElementById('country_list3').innerHTML='<p class="center2">' + selected_countries[2] + '</p>';
document.getElementById('country_list4').innerHTML='<p class="center2">' + selected_countries[3] + '</p>';
document.getElementById('country_list5').innerHTML='<p class="center2">' + selected_countries[4] + '</p>';
