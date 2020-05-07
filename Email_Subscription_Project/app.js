const express = require("express");
const bodyparser = require("body-parser");
const https = require("https");
const app = express();
const request = require("request");

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public"));					//mention the static folder name where the required files to be accessed are stored.

app.get("/",function(req,res){
	res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
	var x = req.body.firstname;
	var y = req.body.lastname;
	var z = req.body.email;

	const data = {
		member:	[
			{
				email_address	:	z,
				status:"subscribed",
				merge_fields:	{
					FNAME:x,
					LNAME:y,
				}
			}
		]
	}

	const jsondata = JSON.stringify(data);			//remember all in caps and stringify converts javascript object into json format reverse is parse

	const url = "https://us8.api.mailchimp.com/3.0/lists/ece56016c1";

	const options = {
		method:"post",
		auth:"Rithikreddy:74c0ce70bf59ce1860ce173ecfe49480-us8",
	}

	var request = https.request(url, options, function(response){
		console.log(response.statusCode);
		if(response.statusCode === 200){
			res.sendFile(__dirname+"/success.html");
		}
		else {
			res.sendFile(__dirname+"/failure.html");
		}
		response.on("data",function(){
			console.log(JSON.parse(jsondata));
		});
	});

	request.write(jsondata);
	request.end();

});

app.post("/failure",function(req,res){
	res.redirect("/");				//retry's again as we are redirecting it
});

app.listen("3000",function(){
	console.log("Server is listenning the requests for the port no 3000");
});


//API key
//74c0ce70bf59ce1860ce173ecfe49480-us8


//List id
//ece56016c1
