const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.sendFile(__dirname + "/index.html");	//don't forget it's sendFile here
});

app.post("/",function(req,res){
	
	var x = Number(req.body.weight);		//It's request not a response as we are requesting the input
	var y = Number(req.body.height);
	
	var bmi = 1.0*x/(y*y);
	
	res.send("BMI is "+bmi);
});

app.listen("3000",function(){
	console.log("Listenning to the port 3000");
});

