function myFunctionInfo1() {
		var popup = document.getElementById("myPopup_gallery");
		popup.classList.toggle("show");	
		var db =null;

var dbId =  "Fremdsein"
var dbVersion = "1.0"
var dbDescribtion = "Fremdsein 4.0 Database for country selection application"
var dbSize = 100000


var err, rows,sql
function getImageNames(){
	
	db=openDatabase(dbId,	dbVersion,	dbDescribtion,	dbSize)
	
		db.transaction(function(tx){
			sql = 'SELECT imageName FROM FCSA'
			
			tx.executeSql(sql,[],function(tx, result){
				var imageBox = document.getElementById('imageBox')
				imageBox.innerHTML = '<img class="images" src=""/>'
			
				var rows = result.rows
				var imageHTML = document.getElementsByClassName('images')[0]
				
				var cln = imageHTML
				
				var path='C:/Users/IMM-Fremdsein'     //exhibition
				//var path = 'E:/Benutzer/saag1011'	//room photogrammetry lab 
				path+='/Downloads/'
				
			
				cln.src = path+rows[rows.length-1].imageName
				
				var i=Math.round(Math.random()*(rows.length-11))
				if(i<0) i=0;
				if(i>rows.length-11) i=0;
				console.log('gallery'+i)
				
				var j=1;
				
				for(i;i<rows.length-1;i++){
					j++;
					cln = imageHTML.cloneNode(true)	
					imageBox.appendChild(cln);
					
					cln.src = path+rows[i].imageName
					
					console.log(rows[i].imageName)
					
					
					if(j>9) break;
				} //for loop
				
			})	//db query
		})// db transaction
}

	getImageNames()

	}