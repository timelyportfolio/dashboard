/** @jsx React.DOM */

var React 		= require('react');
var Reactable 	= require('../components/reactable');
var Table 		= Reactable.Table;

var SmartTable = module.exports = React.createClass({

	render: function() {

        var d = this.props.cortex.datasources[this.props.cortex.datasource_active_id.val()];

		return (
			<div>
					<div className="row">
						<div className="col-lg-12">
							<h1 className="page-header">Table</h1>
						</div>
					</div>

			<Table className="table"
			sortable={true}
			data={d.data.val()}
			itemsPerPage={10}
			/>

			</div>
		);
	}
});


