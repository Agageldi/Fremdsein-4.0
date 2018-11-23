
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

		//To reset DB
		//tx.executeSql('DROP TABLE QuizApp')

		var sql = 'CREATE TABLE if not exists QuizApp(id INTEGER PRIMARY KEY AUTOINCREMENT,'+
						' home TEXT,' +
						' powerdistance INTEGER,'+
						' individualism INTEGER,'+
						' musculinity INTEGER,'+
						' uncertainityAvoidance INTEGER,'+
						' longtermOrientation INTEGER,'+
						' indulgence INTEGER,'+
						' w1 INTEGER,'+
						' w2 INTEGER,'+
						' w3 INTEGER,'+
						' w4 INTEGER,'+
						' w5 INTEGER,'+
						' w6 INTEGER,'+
						' comment TEXT,'+
						' aliasName TEXT,'+
						 'imageName TEXT)'

		tx.executeSql(sql)

	})
}
function insertRow(home,c1,c2,c3,c4,c5,c6,w1,w2,w3,w4,w5,w6,comment,imgName,aliasName){

/*		var sql = 'INSERT INTO QuizApp(home, powerdistance, 	individualism, 		musculinity,	uncertainityAvoidance,	longtermOrientation, indulgence,'+
									'w1,w2,w3,w4,w5,w6, comment,imageName,aliasName) '*/
			var sql = 'VALUES ('+'"'+home+'",'+
								c1+','+c2+','+c3+','+c4+','+c5+','+ c6+','+
								w1+','	+w2+','	+w3+','	+w4+','	+w5+',' +w6+',"' +comment+'","'+imgName+'","'+aliasName+'")'

			var xhttp = new XMLHttpRequest();
			var url = "http://localhost:4000/save/"+sql;
					      xhttp.onreadystatechange = function() {
					        if (this.readyState == 4 && this.status == 200) {
					          console.log(xhttp.responseText);
					           // Action to be performed when the document is read;
					        }
					      };
					      xhttp.open("GET", url, true);
					      xhttp.setRequestHeader('Content-Type', 'text/plain');

					      xhttp.send();
		console.log(sql)

}
function deleteRow(delID){
	if(db==null) openDB()
	db.transaction(function(tx){
		var sql =  "DELETE FROM FCSA WHERE id=" + delID
		tx.executeSql(sql)
	})
}

function runInsertRow(img){
	var cmt = document.getElementById('input_field').value;
	var aliasName =  document.getElementById('alias_name').value.charAt(0).toUpperCase() + document.getElementById('alias_name').value.slice(1)
	insertRow(homecountry,value1,value2,value3,value4,value5,value6,weight1,weight2,weight3,weight4,weight5,weight6,cmt,img,aliasName)
}
