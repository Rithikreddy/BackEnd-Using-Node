const express = require("express");
const bodyparser = require("body-parser");
const app = express();													//express module is loaded

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.sendFile(__dirname + "/index.html");			//__dirname is used to get the path excluding this js file where this current js file resides
});

app.post("/",function(req,res){						//method="post" is mentioned in the form tag here post is used to specify
									//to execute the below code after the index.html loading or after entering the input
	var num1 = Number(req.body.firstinput);				//Number function in js is used to convert the text into Number,firstinput is name of input tag
	var num2 = Number(req.body.secondinput);

	var result = num1+num2;
	console.log(result);
	res.send("The Result is "+result);
});


app.listen("3000",function(){
	console.log("Listening started at port no 3000");
});

