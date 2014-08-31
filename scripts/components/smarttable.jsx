/** @jsx React.DOM */

var React 	= require('react');
var Reactable 	= require('../components/reactable');
var Table 		= Reactable.Table;

var SmartTable = module.exports = React.createClass({

  render: function() {

	//console.log(this.props.cortex.datasource_data.val());

	//filterable={['Name', 'Age', 'Position']}

    return (
		<div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Table search</h1>
                    </div>
                </div>

		<Table className="table"
		sortable={true}
		data={ this.props.cortex.datasource_data.val() }
		itemsPerPage={10}
		/>

		</div>
    );
  }
});


