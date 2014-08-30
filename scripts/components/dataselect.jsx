/** @jsx React.DOM */

var React	= require('react');

var RB		= require('react-bootstrap');
var Grid	= RB.Grid;
var Row 	= RB.Row;
var Col 	= RB.Col;
var Button  = RB.Button;
var Glyphicon = RB.Glyphicon

var moment = require('moment');
var DateRangePicker = require('react-bootstrap-daterangepicker');

var DataSelect = module.exports = React.createClass({

	getInitialState: function () {
		return {
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			},
			startDate: moment().subtract(29, 'days'),
			endDate: moment()
		};
	},

	handleEvent: function (event, picker) {
		this.setState({
			startDate: picker.startDate,
			endDate: picker.endDate
		});
	},

	render: function () {
		var start = this.state.startDate.format('YYYY-MM-DD');
		var end = this.state.endDate.format('YYYY-MM-DD');
		var label = start + ' - ' + end;
		if (start === end) {
			label = start;
		}
		return (
			<Grid>
				<Row>
					<Col md={3}>
					<h2>Data select</h2>

					  <form className="navbar-form">
						<button type="submit" className="btn btn-default"><i className="glyphicon glyphicon-search"></i></button> 
						<input type="search" className="form-control pull-left"> </input>
					  </form>

						<DateRangePicker startDate={this.state.startDate} endDate={this.state.endDate} ranges={this.state.ranges} onEvent={this.handleEvent}>
							<Button className="selected-date-range-btn" style={{width:'100%'}}>
								<div className="pull-left"><Glyphicon glyph="calendar" /></div>
								<div className="pull-right">
									<span>
										{label}
									</span>
									<span className="caret"></span>
								</div>
							</Button>
						</DateRangePicker>
					</Col>
					<Col md={9}>
					</Col>
				</Row>
			</Grid>
		);
	}
});
