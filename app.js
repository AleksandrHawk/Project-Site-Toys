var express = require('express');

var app = express();

//установка механизма представления handlebars
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/images', function(req, res){
    res.render('images');
});

app.get('/contacts', function(req, res){
    res.render('contacts');
});

//Обобщенный обработчик 404 (промежуточное ПО)
app.use(function(req, res){
    res.status(404);
    res.render('404');
});

//Обобщенный обработчик 500 (промежуточное ПО)
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen( "port" , function(){
    console.log('Site запущен на http://localhost:' + 
app.get('port') + 'нажмите Ctrl + C для завершения');
});
