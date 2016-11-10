var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("contactlist", ['contacts']);
var bodyParser = require("body-parser");


app.use(bodyParser.json());
/*
app.get("/", function(req, res){
	res.send("Hello World!");
});
*/
app.use(express.static(__dirname + "/public"));

app.get("/contactlist", function(req, res){
	console.log("I received a GET request")
	
	db.contacts.find(function(err, docs){
		//console.log(docs);
		res.json(docs);
	});
	
});
	
	/*
	person1 = {
			name:"Timmy",
			email:"timidtimmy@timidy.com",
			number:"882-213-2612"
		};
		
		person2 = {
			name:"Ghost",
			email:"ghosterino@aaa.com",
			number:"464-223-1263"
		};
		
		person3 = {
			name:"Kiki",
			email:"32keke@yahoo.com",
			number:"556-043-3253"
		};
		
		var contactlist = [person1, person2, person3];
		res.json(contactlist);
});
*/

app.post("/contactlist", function(req, res){
	//console.log(req.body);
	db.contacts.insert(req.body, function(err, docs){
		res.json(docs);
	});
});

app.delete("/contactlist/:id", function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contacts.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.get("/contactlist/:id", function(req, res){
	var id = req.params.id;
	db.contacts.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.put("/contactlist/:id", function(req, res){
	var id = req.params.id;
	db.contacts.findAndModify(
	{
		query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
		new: true
	}, function(err, doc){
		res.json(doc);
	});
});

app.listen(3000);
console.log("Server running on port 3000");