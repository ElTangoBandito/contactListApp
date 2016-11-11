var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("resumeWeb", ['data']);
var bodyParser = require("body-parser");


app.use(bodyParser.json());
/*
app.get("/", function(req, res){
	res.send("Hello World!");
});
*/
app.use(express.static(__dirname + "/public"));

app.get("/resumeWeb/skill", function(req, res){
	console.log("Got request");
	db.data.find({type: "skill"},function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.get("/resumeWeb/school", function(req, res){
	console.log("Got request");
	db.data.find({type: "edu"},function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.get("/resumeWeb/project", function(req, res){
	console.log("Got request");
	db.data.find({type: "project"},function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.listen(80);
console.log("Server running on port 3000");