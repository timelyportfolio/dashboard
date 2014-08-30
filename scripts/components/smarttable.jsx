/** @jsx React.DOM */

var React 	= require('react');
var Reactable 	= require('../components/reactable');
var Table 		= Reactable.Table;

var SmartTable = module.exports = React.createClass({

  render: function() {
    return (
		<div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Table search</h1>
                    </div>
                </div>

		<Table className="table"
		sortable={true}
		data={[
			{ Name: 'Tiffin Smith', Age: '18', Position: 'CTO' },
			{ Age: '23',  Name: 'Lee Salminen' },
			{ Age: '28', Position: 'Developer' },
			{ Name: 'Peter Griffon', Age: '42', Position: 'Designer' },
			{ Age: '30',  Name: 'Test Person' },
			{ Name: 'Another Test', Age: '26', Position: 'Developer' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '23',  Name: 'End of this Page', Position: 'CEO' },
			{ Name: 'John Smith', Age: '48' },
			{ Age: '26',  Name: 'Tim Salminen' },
			{ Age: '23', Position: 'Designer' },
			{ Name: 'Rene Dumas', Age: '55' },
			{ Age: '30',  Name: 'Sarah' },
			{ Name: 'Test user', Age: '46', Position: 'Robot' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '43',  Name: 'The Boss', Position: 'CEO' },
			{ Name: 'Griffin Smith', Age: '18', Position: 'CTO' },
			{ Age: '23',  Name: 'Lee Salminen' },
			{ Age: '28', Position: 'Developer' },
			{ Name: 'Peter Griffon', Age: '42', Position: 'Designer' },
			{ Age: '30',  Name: 'Test Person' },
			{ Name: 'Another Test', Age: '26', Position: 'Developer' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '23',  Name: 'End of this Page', Position: 'CEO' },
			{ Name: 'John Smith', Age: '48' },
			{ Age: '26',  Name: 'Tim Salminen' },
			{ Age: '23', Position: 'Designer' },
			{ Name: 'Rene Dumas', Age: '55' },
			{ Age: '30',  Name: 'Sarah' },
			{ Name: 'Test user', Age: '46', Position: 'Robot' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '43',  Name: 'The Boss', Position: 'CEO' },
			{ Name: 'Tiffin Smith', Age: '18', Position: 'CTO' },
			{ Age: '23',  Name: 'Lee Salminen' },
			{ Age: '28', Position: 'Developer' },
			{ Name: 'Peter Griffon', Age: '42', Position: 'Designer' },
			{ Age: '30',  Name: 'Test Person' },
			{ Name: 'Another Test', Age: '26', Position: 'Developer' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '23',  Name: 'End of this Page', Position: 'CEO' },
			{ Name: 'John Smith', Age: '48' },
			{ Age: '26',  Name: 'Tim Salminen' },
			{ Age: '23', Position: 'Designer' },
			{ Name: 'Rene Dumas', Age: '55' },
			{ Age: '30',  Name: 'Sarah' },
			{ Name: 'Test user', Age: '46', Position: 'Robot' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '43',  Name: 'The Boss', Position: 'CEO' },
			{ Name: 'Griffin Smith', Age: '18', Position: 'CTO' },
			{ Age: '23',  Name: 'Lee Salminen' },
			{ Age: '28', Position: 'Developer' },
			{ Name: 'Peter Griffon', Age: '42', Position: 'Designer' },
			{ Age: '30',  Name: 'Test Person' },
			{ Name: 'Another Test', Age: '26', Position: 'Developer' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '23',  Name: 'End of this Page', Position: 'CEO' },
			{ Name: 'John Smith', Age: '48' },
			{ Age: '26',  Name: 'Tim Salminen' },
			{ Age: '23', Position: 'Designer' },
			{ Name: 'Rene Dumas', Age: '55' },
			{ Age: '30',  Name: 'Sarah' },
			{ Name: 'Test user', Age: '46', Position: 'Robot' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '43',  Name: 'The Boss', Position: 'CEO' },
			{ Name: 'Tiffin Smith', Age: '18', Position: 'CTO' },
			{ Age: '23',  Name: 'Lee Salminen' },
			{ Age: '28', Position: 'Developer' },
			{ Name: 'Peter Griffon', Age: '42', Position: 'Designer' },
			{ Age: '30',  Name: 'Test Person' },
			{ Name: 'Another Test', Age: '26', Position: 'Developer' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '23',  Name: 'End of this Page', Position: 'CEO' },
			{ Name: 'John Smith', Age: '48' },
			{ Age: '26',  Name: 'Tim Salminen' },
			{ Age: '23', Position: 'Designer' },
			{ Name: 'Rene Dumas', Age: '55' },
			{ Age: '30',  Name: 'Sarah' },
			{ Name: 'Test user', Age: '46', Position: 'Robot' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '43',  Name: 'The Boss', Position: 'CEO' },
			{ Name: 'Griffin Smith', Age: '18', Position: 'CTO' },
			{ Age: '23',  Name: 'Lee Salminen' },
			{ Age: '28', Position: 'Developer' },
			{ Name: 'Peter Griffon', Age: '42', Position: 'Designer' },
			{ Age: '30',  Name: 'Test Person' },
			{ Name: 'Another Test', Age: '26', Position: 'Developer' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '23',  Name: 'End of this Page', Position: 'CEO' },
			{ Name: 'John Smith', Age: '48' },
			{ Age: '26',  Name: 'Tim Salminen' },
			{ Age: '23', Position: 'Designer' },
			{ Name: 'Rene Dumas', Age: '55' },
			{ Age: '30',  Name: 'Sarah' },
			{ Name: 'Test user', Age: '46', Position: 'Robot' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '43',  Name: 'The Boss', Position: 'CEO' },
			{ Name: 'Tiffin Smith', Age: '18', Position: 'CTO' },
			{ Age: '23',  Name: 'Lee Salminen' },
			{ Age: '28', Position: 'Developer' },
			{ Name: 'Peter Griffon', Age: '42', Position: 'Designer' },
			{ Age: '30',  Name: 'Test Person' },
			{ Name: 'Another Test', Age: '26', Position: 'Developer' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '23',  Name: 'End of this Page', Position: 'CEO' },
			{ Name: 'John Smith', Age: '48' },
			{ Age: '26',  Name: 'Tim Salminen' },
			{ Age: '23', Position: 'Designer' },
			{ Name: 'Rene Dumas', Age: '55' },
			{ Age: '30',  Name: 'Sarah' },
			{ Name: 'Test user', Age: '46', Position: 'Robot' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '43',  Name: 'The Boss', Position: 'CEO' },
			{ Name: 'Griffin Smith', Age: '18', Position: 'CTO' },
			{ Age: '23',  Name: 'Lee Salminen' },
			{ Age: '28', Position: 'Developer' },
			{ Name: 'Peter Griffon', Age: '42', Position: 'Designer' },
			{ Age: '30',  Name: 'Test Person' },
			{ Name: 'Another Test', Age: '26', Position: 'Developer' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '23',  Name: 'End of this Page', Position: 'CEO' },
			{ Name: 'John Smith', Age: '48' },
			{ Age: '26',  Name: 'Tim Salminen' },
			{ Age: '23', Position: 'Designer' },
			{ Name: 'Rene Dumas', Age: '55' },
			{ Age: '30',  Name: 'Sarah' },
			{ Name: 'Test user', Age: '46', Position: 'Robot' },
			{ Name: 'Third Test', Age: '19', Position: 'Salesperson' },
			{ Age: '43',  Name: 'The Boss', Position: 'CEO' },


		]}
		itemsPerPage={10}
		filterable={['Name', 'Age', 'Position']}
		/>


		</div>
    );
  }
});


