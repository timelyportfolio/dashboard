var express 	= require('express');
//var bodyParser	= require('body-parser');
var app			= express();
var config 		= require('./webpack.config');
var webpack 	= require('webpack');
var WebpackDevServer = require('webpack-dev-server');

/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var comments = [{author: 'Pete Hunt', text: 'Hey there!'}];

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});
*/

//app.use(express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/public'));
//app.use('/static', express.static(__dirname + '/public'));

app.listen(3001);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
