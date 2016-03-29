var express = require('express');

var app = express();


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

