$('#next1').on('click',function(){
	//selected_countries= [$("#country_list1").find(":selected").text(),$("#country_list2").find(":selected").text(),$("#country_list3").find(":selected").text(),$("#country_list4").find(":selected").text(),$("#country_list5").find(":selected").text()];
	//selected_countries_indexes=[$("#country_list1").val(),$("#country_list2").val(),$("#country_list3").val(),$("#country_list4").val(),$("#country_list5").val()];
	if(selectedShapes.length==5){
		var centerPoints = []
		var selected_code=[];
		
		for(var i=0;i<selectedShapes.length;i++)
		{
			var id = idConverter(selectedShapes[i]);
			var id2 = world_id.indexOf(id);
			//console.log(typeof(id)+"  " +typeof(world_id[100]));
			selected_code.push(world_code[id2]);
		}
		
		selected_countries=convertToName(selectedShapes);
		centerPoints= convertToCenterPoints(selectedShapes);
		
		homeCounId = idConverter(HOME._leaflet_id)

		homeCounId = world_id2.indexOf(homeCounId)
			var homeCounCenter = [[],[]]
			homeCounCenter[0].push(world_var[0][homeCounId]);
			homeCounCenter[1].push(world_var[1][homeCounId]);
		
		
		selected_countries_indexes = selectedShapes;
		
		console.log("following counties were selected: "+selected_countries);
		console.log("following counties were selected: "+selected_countries_indexes);
		world_code
		localStorage.setItem("transfer_var",selected_countries)
		localStorage.setItem("transfer_centerPoints",centerPoints)
		localStorage.setItem("transfer_world_code",selected_code)
		
		localStorage.setItem("homeCounId",homeCounCenter)	
		localStorage.setItem('HOME',document.getElementById("modal-temp").innerHTML)
		
		
		window.location.href = './components/arrangement1.html'
	}
	else{
		var btn = document.getElementById('info')
		
		btn.style.animation = 'none'
		btn.offsetHeight
		btn.style.animation = null
	}
});

$('#next2').on('click',function(){
	//selected_countries= [$("#country_list1").find(":selected").text(),$("#country_list2").find(":selected").text(),$("#country_list3").find(":selected").text(),$("#country_list4").find(":selected").text(),$("#country_list5").find(":selected").text()];
	//selected_countries_indexes=[$("#country_list1").val(),$("#country_list2").val(),$("#country_list3").val(),$("#country_list4").val(),$("#country_list5").val()];
	var subtopic = $('#free_Topic').get()[0].value
	
	if(subtopic != ""){
		var arrangment1=[]
		
		for(var i=0;i<5;i++){
			var x =$('#country_list'+(i+1)).html()
			x= x.split('>')
			x = x[1].split('<')
			
			arrangment1.push(x[0])
		}
		localStorage.setItem('subTopic1',$('#free_Topic').get()[0].value)
		localStorage.setItem("transfer_arrangment1",arrangment1)
		
		var sliderName =['start','wake','leave','return','sleep']
		var HANDLers = document.getElementsByClassName('ui-slider-handle')
		
		for(i=0;i<5;i++){
			var txt = 'foodHandler'+i
			localStorage.setItem(txt,HANDLers[i].getAttribute('data-value'))
		}
		window.location.href = './arrangement2.html'
	}
	else{
		var btn = document.getElementById('free_Topic_box')
		
		btn.style.animation = 'none'
		btn.offsetHeight
		btn.style.animation = null
		
		document.getElementById('free_Topic').focus()
	}
	
});
$('#next3').on('click',function(){
	//selected_countries= [$("#country_list1").find(":selected").text(),$("#country_list2").find(":selected").text(),$("#country_list3").find(":selected").text(),$("#country_list4").find(":selected").text(),$("#country_list5").find(":selected").text()];
	//selected_countries_indexes=[$("#country_list1").val(),$("#country_list2").val(),$("#country_list3").val(),$("#country_list4").val(),$("#country_list5").val()];
	
	var subtopic = $('#free_Topic').get()[0].value
	
	if(subtopic != ""){
		var arrangment2=[]
		
		for(var i=0;i<5;i++){
			var x =$('#country_list'+(i+1)).html()
			x= x.split('>')
			x = x[1].split('<')
			
			arrangment2.push(x[0])
		}

		localStorage.setItem("transfer_arrangment2",arrangment2)
		localStorage.setItem('subTopic2',$('#free_Topic').get()[0].value)
		
		
		var sliderName =['start','wake','leave','return','sleep']
		var HANDLers = document.getElementsByClassName('ui-slider-handle')
		
		for(i=0;i<5;i++){
			var txt = 'freedomHandler'+i
			localStorage.setItem(txt,HANDLers[i].getAttribute('data-value'))
		}
		
		window.location.href = './arrangement3.html'
		
	}else{
		var btn = document.getElementById('free_Topic_box')
		
		btn.style.animation = 'none'
		btn.offsetHeight
		btn.style.animation = null
		
		document.getElementById('free_Topic').focus()
	}
	
});
$('#nextDist').on('click',function(){
	
	var freetopic = $('.free_Topic').get()[0].value
	var subtopic = $('.free_Topic').get()[1].value
	
	if(subtopic != "" && freetopic !=""){	
		var arrangment3=[]
		
		for(var i=0;i<5;i++){
			var x =$('#country_list'+(i+1)).html()
			x= x.split('>')
			x = x[1].split('<')
			
			arrangment3.push(x[0])
		}
		
		localStorage.setItem("transfer_arrangment3",arrangment3)
		localStorage.setItem("transfer_freeTopic",freetopic)
		localStorage.setItem("transfer_freeSubtopic",subtopic)
		
		
		
		/*selected_countries=convertToName(selectedShapes);
		selected_countries_indexes = selectedShapes;
		
		console.log("following counties were selected: "+selected_countries);
		console.log("following counties were selected: "+selected_countries_indexes);
		*/
		
		var sliderName =['start','wake','leave','return','sleep']
		var HANDLers = document.getElementsByClassName('ui-slider-handle')
		
		for(i=0;i<5;i++){
			var txt = 'ftopicHandler'+i
			localStorage.setItem(txt,HANDLers[i].getAttribute('data-value'))
		}
		
		window.location.href = './distance.html'
		
	//localStorage.setItem("transfer_var",selected_countries)
	}
	else{
		var btn = document.getElementsByClassName('free_Topic_box')
		
		for(i=0;i<2;i++){
			btn[i].style.animation = 'none'
			btn[i].offsetHeight
			btn[i].style.animation = null
		}
		
		document.getElementById('free_Topic').focus()
	}
	
});
$('#clear').on('click',function(){
	location.reload();
});

var  myTimer
$('#modal-submit').on('click',function(){
	if(HOME!=null)	{
		
		
		var popup = document.getElementsByClassName('popup')
		
		for(var i=0;i<popup.length;i++){
			popup[i].style.top = '60px'
			popup[i].style.width  = '18px'
			popup[i].style.height  = '18px'
			//if(i==1) popup[i].style.transform  = 'scale(0.6) translate(-50%,0%)'
		}
		
		
		modal.style.display = "none";
		var btn = document.getElementById('homeCountry')
		btn.innerHTML="<br>I am from<br><i>"+document.getElementById("modal-temp").innerText + "</i>"
		
		btn.style.animation = 'none'
		btn.offsetHeight
		btn.style.animation = null
		
	}
});
$('#homeCountry').on('click',function(){
	modal.style.display= "block"
	
	var popup = document.getElementsByClassName('popup')
		
	for(var i=0;i<popup.length;i++){
			popup[i].style.top = '68px'
			popup[i].style.width  = '37px'
			popup[i].style.height  = '37px'
			//if(i==1) popup[i].style.transform  = 'scale(1) translate(-100%,-50%)'
	}
	//if(myTimer!=null) clearTimeout(myTimer)
});

$('#modal-agree').on('click',function(){
	document.getElementById('myModal').style.display = 'none'
	
	document.getElementById('myModal_alias').style.display = 'block'
	
	//printBox.style.fontFamily = 'Arial, Helvetica, sans-serif'
	

		
/*	
	domtoimage.toJpeg(printBox, { quality: 0.95
	//, style: {'font-family': 'Arial, Helvetica, sans-serif'}
	})
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
*/	
	openDB()
})
$('#modal-disagree').on('click',function(){
	document.getElementById('myModal').style.display = 'none'
	document.getElementById('comment_button').style.display = 'none'
	//document.getElementById('alias_name').focus()

	//comment.remove();
	document.getElementById('header1').innerHTML = "Emotional Foreignness Ranking"
	document.getElementById('finish_button').style.visibility = 'visible'
	document.getElementById('print_button').innerHTML = 'print & finish'
})

$('#print_button').on('click',function(){
	localStorage.setItem('printTimer','on')
	var cmt = document.getElementById('input_field')
	if($('#print_button').html() =='print &amp; finish' || cmt.value != "" && cmt.value != " " ){
		//turning  off not printable elements
		document.getElementById('comment_button').style.display = 'none'
		document.getElementById('home').style.display = 'none'
		document.getElementById('print_button').style.display = 'none'
		document.getElementById('finish_button').style.display = 'none'
		document.getElementsByClassName('popup')[0].style.display = 'none'
		document.getElementsByClassName('popup')[1].style.display = 'none'
		document.getElementById('printBox').style.boxShadow = '0px 0px 0px 0px white'
		window.print()
		
		if($('#print_button').html() =='print &amp; finish') $('#finish_button').click()
		else 		 $('#comment_button').click()
	}
	else{
		cmt.style.animation = 'none'
		cmt.offsetHeight
		cmt.style.animation = null
	}
});

$('#comment_button').on('click',function(){
	var cmt = document.getElementById('input_field')
	if(cmt.value != "" && cmt.value != " " ){
	var d = new Date();
	var dtStamp = d.getDate() + "" + (d.getMonth()+1)+""+d.getFullYear() +""+d.getHours() + "" +d.getMinutes()
	var imageName = 'Foreigness-'+dtStamp+'.png'
	//runInsertRow(imageName);
	cmt.style.animation = 'none'

	//document.getElementsByTagName("BODY")[0].style.backgroundColor = 'white'

	/*html2canvas(document.querySelector("#printBox"),{allowTaint: false, useCORS: true }).then(canvas => 
		{
			console.log(canvas.toDataURL('image/png'))
			$('#test').attr('href', canvas.toDataURL("image/png"));
			$('#test').attr('download','Foreigness-'+dtStamp+'.png');
			$('#test')[0].click();
			window.location.href = "../index.html";
		});*/
	}
	else{
		cmt.style.animation = 'none'
		cmt.offsetHeight
		cmt.style.animation = null
		
		cmt.focus()
	}
	
	
})

$('#finish_button').on('click',function(){
	window.location.href = "../index.html";
})
$('#submit_alias').on('click',function(){
	var cmt = document.getElementById('alias_name')
	//cmt.style.animationDuration  = '1s'
	if(cmt.value != "" && cmt.value != " " ){
	document.getElementById('myModal_alias').style.display = 'none'
	var Alias = document.getElementById('alias_name').value.charAt(0).toUpperCase() + document.getElementById('alias_name').value.slice(1)
	document.getElementById('header1').innerHTML = "Emotional Foreignness Ranking by " + Alias
	
	document.getElementById('input_field').focus()
	}
	else{
		
		cmt.style.animation = 'none'
		cmt.offsetHeight
		cmt.style.animation = null
		
		cmt.focus();
	}
})
$('#home').on('click',function(){
	window.location.href = "../index.html";
})
$('#instruction').on('click',function(){
	document.getElementById('myModal_title').style.display='none'
	document.getElementById('free_Topic').focus()
})
