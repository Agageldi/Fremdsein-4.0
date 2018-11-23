

$('#modal-submit').on('click',function(){
	if(HOME!=null)	{
	modal.style.display = "none";
		var btn = document.getElementById('homeCountry')
		btn.innerHTML="<br>I am from<br><i>"+document.getElementById("modal-temp").innerHTML + "</i>"

		btn.style.animation = 'none'
		btn.offsetHeight
		btn.style.animation = null


	}
});
$('#homeCountry').on('click',function(){
	modal.style.display= "block"
	//onmousemove = function(){}


});
$('#chart_close').on('click',function(){
	chart_popup.style.display='none'

})
$('#modal-agree').on('click',function(){
	document.getElementById('myModal').style.display = 'none'
	document.getElementById('myModal_alias').style.display = 'block'

	openDB()
})
$('#modal-disagree').on('click',function(){
	document.getElementById('myModal').style.display = 'none'

	//comment.remove();
	document.getElementById('comment_button').style.visibility = 'hidden'

	document.getElementById('heading1').innerHTML = "Ideal Home Finder"
	document.getElementById('finish_button').style.visibility = 'visible'

})
$('#comment_button').on('click',function(){
	var cmt = document.getElementById('input_field')
	//document.getElementById('info_page0').remove()


	if(cmt.value != "" && cmt.value != " " ){
		var d = new Date();
		var dtStamp = d.getDate() + "" + (d.getMonth()+1)+""+d.getFullYear() +""+d.getHours() +""+d.getMinutes()+""+d.getSeconds()
		imageName = 'PerfektHome-'+dtStamp+'.png'
		runInsertRow(imageName)
		console.log('Comment saved')
		chart_popup.style.display='none';
		map.setView([0, 20], 0);
		document.getElementById('heading1').style.marginLeft= '-5%';
		document.getElementById('input_field').style.transition = 'none'
		//document.getElementById('comment_button').style.visibility = 'hidden'
		//document.getElementById('finish_button').style.visibility = 'hidden'

	}
	else{
		cmt.style.animation = 'none'
		cmt.offsetHeight
		cmt.style.animation = null

		cmt.focus()
	}
})
$('#finish_button').on('click',function(){
	console.log('Season Over')
	window.location.href = "index.html";
})
$('#submit_alias').on('click',function(){
	var cmt = document.getElementById('alias_name')
	//cmt.style.animationDuration  = '1s'
	if(cmt.value != "" && cmt.value != " " ){
		document.getElementById('myModal_alias').style.display = 'none'
		var Alias = document.getElementById('alias_name').value.charAt(0).toUpperCase() + document.getElementById('alias_name').value.slice(1)
		document.getElementById('heading1').innerHTML = "Ideal Home Finder Map of  " + Alias

		document.getElementById('input_field').focus()
	}
	else{

		cmt.style.animation = 'none'
		cmt.offsetHeight
		cmt.style.animation = null
	}
})
$('#home').on('click',function(){
	window.location.href = "index.html";
})
