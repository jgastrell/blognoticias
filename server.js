var express = require('express');
var app = express();
var mysql = require('mysql');

app.set('user', process.env.user);
app.set('password', process.env.password);

var connection = mysql.createConnection({
  host: 'localhost',
  user: app.get('user'),
  password: app.get('password'),
  database: 'phpmyadmin',
  port: ''
});


connection.connect(function(error) {
  if (error) {
    throw error;
  } else  {
    console.log('Conectado.');
  }
});

connection.end();

app.get('/', function(req, res) {
  res.send('<h1>Blog de noticias de Elda Morales</h1>');
});

var server = app.listen(3000, function() {
  console.log("Iniciando blog en puerto 3000...");
});
