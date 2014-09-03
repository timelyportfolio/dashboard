/** @jsx React.DOM */
var React = require('react');

var request = require('superagent');

var RB = require('react-bootstrap');
var Form = RB.Form;
var Input = RB.Input;

var handleForm = require('../utils/handle-form.js');

var datasourceSelect = module.exports = React.createClass({

	getInitialState: function() {
		return {};
	},

	onChange: handleForm,

	componentDidUpdate: function(){

		var id = this.state["select-one"];
		this.props.cortex.datasource.id.set(id);

		this.props.cortex.datasource.list.map(function(d) {
			if (d.id.val() === id ){

				this.props.cortex.datasource.name = d.name.val();
				this.props.cortex.datasource.url  = d.url.val();

				// tofix: only load JSON data if needed 
				this.loadData( d.url.val(), d.data );
			}
		}.bind(this) );
	},

	loadData: function(url, obj) {
		request
			.get(url)
			.end(function(res) {
				obj.set(res.body);
				this.props.cortex.datasource.data.set(res.body);
				//console.log(obj.val());
			}.bind(this));
	},

    render: function() {

		var options = this.props.cortex.datasource.list.map(function(d, index) {
			return ( <option key={index} value={d.id.val()}>{d.name.val()}</option> );
		});

		// default empty option
		options.unshift( <option key={-1} value=''>select data source</option>  );

        return (
			<div>
				<Input type="select" name="select-one" value={this.props.cortex.datasource.id.val()} onChange={this.onChange}>
					{options}
				</Input>
			</div>
        );
    }

});
