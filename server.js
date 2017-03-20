var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express()
// app.route('/*').get(function(req, res) { 
//     return res.sendFile(path.join(config.root, 'index.html')); 
// });
mongoose.connect('mongodb://localhost/employees', function(err){
	// console.log(err)
})
console.log(mongoose.connection.readyState);
// mongoose.connection.on('error', function (err) {
// 	console.log(err)
// });

var Employee = mongoose.model('Employee', mongoose.Schema({
	name: String,
	dept: String,
	area: String,
	status: String,
	contact: String,
	sale: String,
}));


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/client'));


app.get('/api/employees', function(req,res){
	Employee.find(function(err, employees){
		if (err)
			res.send(err)
		res.json(employees) 
	})
})

app.get('/api/employees/:id', function(req,res){
	console.log('Request with req '+ req.body)

	Employee.findOne({_id: req.params.id}, function(err, employees){
		if (err)
			res.send(err)
		res.json(employees) 
	})
})

app.post('/api/employees', function(req,res){
	console.log('came in')
	console.log(req.body)
	Employee.create(req.body, function(err, employees){
		if (err)
			res.send(err)
		console.log('Create')
		res.json(employees) 
	})
})


app.delete('/api/employees/:id', function(req, res) {
	Employee.findOneAndRemove({_id: req.params.id}, function(err, employees) {
		if (err)
			res.send(err)
		res.json(employees)	
	})
	
})

app.listen(3000, function(){
	console.log('Server started')
})