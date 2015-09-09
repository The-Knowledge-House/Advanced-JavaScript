var express = require('express');

var app = express();

var request = require('request');
var http = require('http');


app.use(express.static(__dirname + '/public'));


//set up the server

app.set('port', process.env.PORT || 3000) //listen to port 3000 

//set up the views engine 
var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/public')); //setup static file directory 

app.get('/', function(req, res){  //URL Routing for home
	res.render('index');
});


app.get('/about', function(req, res){ //URL Routing for About 
	res.render('about');
});

app.get('/search', function(req, res){ //URL Routing for search 
	res.render('search');
});

app.get('/searching', function(req, res){
	var val = req.query.search;
 	var url = "http://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q=" +
 	val + "&accepted=True&site=stackoverflow"; 
 	console.log(url)

 	request(url , function(err, resp, body){
 		body = JSON.parse(body);
 		//logic used to compare search results with the input from user
 	//	if(!body.query.results.RDF.item){
 	//		result = "No results for this search have been found";
 	//	} else {
 	//		result = body.query.results.RDF.item[0]['title'];
 	//	}

 	//	res.send(result)
 	});

});

app.use(function(req, res, next){
	res.status(404);
	res.render('404')	
});


app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500)
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + 
		app.get('port') + '; press Ctrl-C to terminate.');
}); // Terminal message when port is activated

