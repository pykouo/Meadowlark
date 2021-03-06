var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port',process.env.PORT || 3000);

//Home page
app.get('/',function(req,res){
	res.render('home');
});

//About Page
app.get('/about',function(req,res){
	res.render('about');
})

//製作404畫面
app.use(function(req,res){
	res.status(404);
	res.render('404');
});


//505畫面
app.use(function(err,req,res,next){
	console.log(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express start on http://localhost:' + app.get('port'));
});

