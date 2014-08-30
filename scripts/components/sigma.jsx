/** @jsx React.DOM */

var React = require('react');

var Sigma = module.exports = React.createClass({

	componentDidMount: function(){

	  sigma.parsers.json('http://wikicompany.org/data.json', {
	  //sigma.parsers.json('http://localhost/data.json', {
		container: 'sigma1',
		settings: {
		  defaultNodeColor: '#ec5148'
		}
	  });

	},

	render: function() {
		//console.log(sigma);

		return (
		  <div>

			<h1>Sigma graph</h1>
			<div id="sigma1"></div>

		  </div>
		);
  	}
});

