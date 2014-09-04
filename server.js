var express 	= require('express');
var app			= express();
var config 		= require('./webpack.config');
var webpack 	= require('webpack');
var ws 			= require('webpack-dev-server');

app.use('/', express.static(__dirname + '/public'));

app.listen(3001);

new ws(webpack(config), {
		publicPath: config.output.publicPath,
		hot: true
	}).listen(3000, 'localhost', function (err, result) {
		if (err) {
			console.log(err);
		}
		console.log('Listening at localhost:3001');
	});
