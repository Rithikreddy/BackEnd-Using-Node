const express = require("express");
const https = require("https");
const app = express();

app.get("/",function(req,res){

	url = "https://sv443.net/jokeapi/v2/joke/Any?contains=array";
	
	https.get(url,function(response){				//now https will make a get request to the url to send data in form of json format
		//console.log(response);
		console.log(response.statusCode);
		response.on(data,function(){
			const jokedata = JSON.parse(data);
			console.log(jokedata);
			//const a = jokedata.main.x;			//main is one of the object of the jokedata object and x is object of the maindata and finally it returns the value of x
		});
	});
	
	res.send("Hello World");
});

app.listen("3000",function(){
	console.log("The server started listenning for the port no 3000");
});
