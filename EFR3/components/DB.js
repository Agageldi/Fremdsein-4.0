
//C:\Users\Administrator\AppData\Local\Google\Chrome\User Data\Default\databases\file__0


var db =null;

var dbId =  "Fremdsein"
var dbVersion = "1.0"
var dbDescribtion = "Fremdsein 4.0 Database for country selection application"
var dbSize = 100000


function openDB(){
	//connection to the DB
	db=openDatabase(dbId,	dbVersion,	dbDescribtion,	dbSize)
	
	//create new table in the DB
	db.transaction(function(tx){
		
		//tx.executeSql('DROP TABLE FCSA')
		
		var sql = 'CREATE TABLE if not exists FCSA(id INTEGER PRIMARY KEY AUTOINCREMENT,'+
						' home TEXT,' + 
						' country1 TEXT,'+
						' country2 TEXT,'+
						' country3 TEXT,'+
						' country4 TEXT,'+
						' country5 TEXT,'+
						' foodType TEXT, foodArrangment INTEGER, sliderFood TEXT,'+
						' freedomType TEXT, freedomArrangment INTEGER, sliderFreedom TEXT,'+
						' freeTopic TEXT, freeSubTopic TEXT, FreeTopicArrangment INTEGER,  sliderFTopic TEXT,'+
						' imageName TEXT, aliasName TEXT,'+
						'comment TEXT)'
			
		tx.executeSql(sql)
		
		
	})
}
function insertRow(home,c1,c2,c3,c4,c5,foodType,foodArrangment,freedomType,freedomArrangment,freeTopic,freeSubTopic,freeTopicArrangment,comment,imageName,aliasName){
	if(db==null) openDB()
	db.transaction(function(tx){
		var sql = 'INSERT INTO FCSA(home,country1,country2,country3,country4,country5,'+
								' foodType, foodArrangment, sliderFood, freedomType,freedomArrangment,  sliderFreedom,'+
								' freeTopic,freeSubTopic,freeTopicArrangment, sliderFTopic, comment, imageName, aliasName) '+
								'VALUES ("'+home + '","'+
								c1+'","'+c2+'","'+c3+'","'+c4+'","'+c5+'","'+
								foodType+'",'+foodArrangment + ',"'+foodHandler.join()+'","'+
								freedomType+'",'+freedomArrangment+',"'+ freedomHandler.join()+'","'+
								freeTopic+'","'+freeSubTopic+'",'+freeTopicArrangment+',"'+ ftopicHandler.join()+'","'+
								comment+'","'+imageName+'","'+aliasName+'")'
		console.log(sql)
		tx.executeSql(sql)					
	})
}
function deleteRow(delID){
	if(db==null) openDB()
	db.transaction(function(tx){
		var sql =  "DELETE FROM FCSA WHERE id=" + delID
		tx.executeSql(sql)
	})
}

function refreshDB(){
	if(db==null) openDB()
	db.transaction(function(tx){
		var sql = "SELECT * FROM FCSA"
		
		tx.executeSql(sql,[],function(tx,result){
			var box = document.getElementById('myDB')					//Here ID of the HTML element has to be updated
			box.innerHTML =box.innerHTML + result.rows[0].foodType
		})	
	})
}
function runInsertRow(imageName){
	var c=selected_countries
	var a=[0,0,0]
	var arr=[arrangment1,arrangment2,arrangment3]
	
	for(j=0;j<3;j++){
		for(i=0;i<arr[j].length;i++){
			a[j]=a[j]*10+(c.indexOf(arr[j][i])+1)
		}
	}
	
	var comment = document.getElementById('input_field').value
	var food = ST1
	var freedom = ST2
	var topic = ST3
	var stopic = ST4
	var aliasName = document.getElementById('alias_name').value.charAt(0).toUpperCase() + document.getElementById('alias_name').value.slice(1)
	
	insertRow(HOME,c[0],c[1],c[2],c[3],c[4],food,a[0],freedom,a[1],topic,stopic,a[2],comment,imageName,aliasName)
}
