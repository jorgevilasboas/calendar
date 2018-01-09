var express = require('express')
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/calendar")
var app = express()

app.set('view engine', 'ejs')

app.get("/", function(req, res){
    res.render("home")
})

app.get("/main", function(req, res){
    res.render("main")
})



app.listen(3000, function(){
    console.log("Server Started")
})