//jshint vesion:6

const express = require("express");

const bodyparser = require("body-parser");

const app = express();

const date = require(__dirname + "/date.js");         //Importing date.js as module(object shortly)

app.use(express.static("public"));            //for calling all the files externally in html required like css,js etc.

app.set('view engine','ejs');                 //don't forget the space between the view and the engine this is used for calling ejs file

app.use(bodyparser.urlencoded({extended:true}));   //It's required for using the bodyparser

var items = ["Buy food","Cook food","Eat Food"];

var workitems = [];

app.get("/",function(req,res){
  // var x = new Date();
  //
  // var options = {   //specifying the options for the date
  //   weekday:"long",
  //   day:"numeric",
  //   month:"long"
  // };
  //
  // var y= x.toLocaleDateString("en-US",options);     //Be careful with spelling of Locale

  //let y = date.date();
  let y=date.day();

  res.render("list",{template:y,newitem:items});  //here actually all the items are sent as array seperated with but only in one li item
});

app.post("/",(req,res) => {
    if(req.body.button === "Work"){
      workitems.push(req.body.firstinput);
      res.redirect("/work");
    }
    else{
      items.push(req.body.firstinput);
      res.redirect("/");                          //It gets redirected to the above get method so that the list is modified
    }
});

app.get("/work",(req,res) =>{
    res.render("list",{template:"Work",newitem:workitems});
});

app.get("/about",(req,res) => {
    res.render("about");                          //render function tells us to check with the about.ejs file
});

app.listen("3000",() =>{
  console.log("Server is listening to port 3000");
});
