/** @jsx React.DOM */
var React 	= require('react');

var Cookies = require("cookies-js");
var request = require('superagent');

var RB 		= require('react-bootstrap');
var Form 	= RB.Form;
var Input 	= RB.Input;

var handleForm = require('../utils/handle-form.js');

var datasourceSelect = module.exports = React.createClass({

	getInitialState: function() {
		return {};
	},

	onChange: handleForm,

	componentDidUpdate: function(){

		var id = this.state["select-one"];

		// store active id
		this.props.cortex.datasource_active_id.set(id);

		if (Cookies.enabled) { Cookies.set('dashboard-datasource-active-id', id); }

		// load data source (TOFIX: only load JSON data if needed)
		//if (id !== ''){
			this.loadData( this.props.cortex.datasources[id].url.val(), this.props.cortex.datasources[id].data );
		//}
	},

	loadData: function(url, obj) {
		request
			.get(url)
			.end(function(res) {
				obj.set(res.body);
				//console.log(obj.val());
			}.bind(this));
	},

    render: function() {

		var options = [];

		this.props.cortex.datasources.forEach( function(key, d){
			options.push(<option key={key} value={key}>{d.name.val()}</option>);
		});

        return (
			<div>
				<Input type="select" name="select-one" value={this.props.cortex.datasource_active_id.val()} onChange={this.onChange}>

					<option key={-1} value=''>select data</option>

					{options}
				</Input>
			</div>
        );
    }

});
