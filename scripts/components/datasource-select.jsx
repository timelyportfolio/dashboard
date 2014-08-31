/** @jsx React.DOM */
var React = require('react');

var request = require('superagent');

var RB = require('react-bootstrap');
var Form = RB.Form;
var Input = RB.Input;

var handleForm = require('../utils/handle-form.js');

var DataSourceSelect = module.exports = React.createClass({

	getInitialState: function() {
		return {};
	},

	onChange: handleForm,

	componentDidUpdate: function(){
		//console.log( JSON.stringify(this.state["select-one"], null, 1) );

		var old_data_id = this.props.cortex.datasource_chosen.val();

		this.props.cortex.datasource_chosen.set(this.state["select-one"]);
		var new_data_id = this.props.cortex.datasource_chosen.val();

		if (this.props.cortex.datasource_chosen.val() !== '' &&
			old_data_id !== this.props.cortex.datasource_chosen.val() ){


			this.props.cortex.datasources.map(function (datasource) {
				if (datasource.id.val() === new_data_id ){
					this.loadData( datasource.url.val() );
				}
			}.bind(this) );

			
		}
	},

	loadData: function(url) {
		request
			.get(url)
			.end(function(res) {
				//this.setState({comments: res.body});
				//console.log( res.body );
				this.props.cortex.datasource_data.set(res.body);
			}.bind(this));
	},


    render: function() {
		//console.log(this.props.cortex);

		var options = this.props.cortex.datasources.map(function (datasource, index) {
			return ( <option key={index} value={datasource.id.val()}>{datasource.name.val()}</option> );
		});

		// default empty option
		options.unshift( <option key={-1} value=''>select data source</option>  );

        return (
			<div>
				<form>
 					<select name="select-one"  value={this.props.cortex.datasource_chosen.val()} onChange={this.onChange}>
					{options}
				</select>
			</form>
			</div>
        );
    }

});
