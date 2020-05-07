//jshint esversion:6

const express = require("express");

const app = express();

app.get("/",function(req,res){				//req,res are shortcuts for request and response we can use elongated words also
	res.send("<h1>Hello World </h1>");
});

app.get("/about",function(req,res){
	res.send("<h1>Rithikreddy</h1><h2>Computer Science Engineer</h2><h3>Nit warangal</h3>");
});

app.listen("5000",function(){
	console.log("The server started on the port:5000");
});

