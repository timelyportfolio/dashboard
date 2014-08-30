/** @jsx React.DOM */

var React = require('react');

//var d3 = require('d3');
//var d3 = require('../../bower_components/d3/d3.min.js');
//var c3 = require('../../bower_components/c3/c3.min.js');

var Charts = module.exports = React.createClass({

	componentDidMount: function(){

		var chart1a = c3.generate({
			bindto: '#chart1a',
			data: {
				type: 'spline',
				columns: [
					['sample', 30, 200, 100, 56, 150, 250, 150, 200, 170, 240, 34, 150, 100, 40, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 78, 150, 250, 150, 200, 170, 24, 35, 150, 100, 98, 35, 22, 25, 30, 27, 140, 150, 90, 150, 50, 120, 70, 40]
				]
			},
			zoom: {
				enabled: true
			}
		});
		

		var chart1b = c3.generate({
			bindto: '#chart1b',
			data: {
				type: 'spline',
				columns: [
					['sample', 200, 100, 400, 150,  170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 200, 100, 100, 400, 150, 250, 150, 200, 170, 240, 400, 150, 200, 100, 400, 150, 30, 200, 100, 400, 150, 250]
				]
			},
			subchart: {
				show: true
			}
		});

		/*
		var chart2 = c3.generate({
			bindto: '#chart2',
			data: {
			  columns: [
				['data1', 30, 200, 100, 400, 150, 250],
				['data2', 50, 20, 10, 40, 15, 25]
			  ]
			}
		});
		*/

		var chart2 = c3.generate({
			bindto: '#chart2',
			data: {
				x: 'x',
		//        x_format: '%Y%m%d', // 'x_format' can be used as custom format of 'x'
				columns: [
					['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
		//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 130, 340, 200, 500, 250, 350]
				]
			},
			axis: {
				x: {
					type: 'timeseries',
					tick: {
						format: '%Y-%m-%d'
					}
				}
			}
		});


		var chart3 = c3.generate({
			bindto: '#chart3',
			data: {
				columns: [
					['data1', 30, 20, 50, 40, 60, 50],
					['data2', 200, 130, 90, 240, 130, 220],
					['data3', 300, 200, 160, 400, 250, 250],
					['data4', 200, 130, 90, 240, 130, 220],
					['data5', 130, 120, 150, 140, 160, 150],
					['data6', 90, 70, 20, 50, 60, 120],
				],
				type: 'spline',
				types: {
					data3: 'spline',
					data4: 'spline',
					data6: 'bar',
				},
				groups: [
					//['data1','data2']
				]
			}
		});


		var chart3b = c3.generate({
			bindto: '#chart3b',
			data: {
				columns: [
					['data1', 30, 20, 22, 40, 15, 25, 20, 22, 40],
					['data2', 130, 100, 73, 200, 150, 50],
					['data3', 230, 200, 200, 300, 250, 250]
				],
				type: 'bar',
				groups: [
					['data1', 'data2', 'data3']
				]
			},
			grid: {
				y: {
					lines: [{value:0}]
				}
			}
		});


		var chart4 = c3.generate({
			bindto: '#chart4',
			data: {
				columns: [
					['data1', 300, 350, 300, 100, 140, 200, 0, 0, 0],
					['data2', 130, 100, 140, 200, 150, 50, 66, 22, 83]
				],
				types: {
					data1: 'area-spline',
					data2: 'area-spline'
				}
			}
		});


		var chart5a = c3.generate({
				bindto: '#chart5a',
				data: {
						columns: [
								['data', 91.4]
						],
						type: 'gauge',
						onclick: function (d, i) { console.log("onclick", d, i); },
						onmouseover: function (d, i) { console.log("onmouseover", d, i); },
						onmouseout: function (d, i) { console.log("onmouseout", d, i); }
				},
				gauge: {
		//        label: {
		//            format: function(value, ratio) {
		//                return value;
		//            },
		//            show: false // to turn off the min/max labels.
		//        },
		//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
		//    max: 100, // 100 is default
		//    units: ' %',
		//    width: 39 // for adjusting arc thickness
				},
				color: {
						pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
						threshold: {
		//            unit: 'value', // percentage is default
		//            max: 200, // 100 is default
								values: [30, 60, 90, 100]
						}
				}
		});


		var chart5b = c3.generate({
			bindto: '#chart5b',
			data: {
				columns: [
					['data1', 30],
					['data2', 120],
					['data3', 14],
					['data4', 59],
				],
				type : 'donut',
				onclick: function (d, i) { console.log("onclick", d, i); },
				onmouseover: function (d, i) { console.log("onmouseover", d, i); },
				onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			},
			donut: {
				title: "Iris Petal Width"
			}
		});


		var chart6 = c3.generate({
			bindto: '#chart6',
			data: {
				xs: {
					setosa: 'setosa_x',
					versicolor: 'versicolor_x',
				},
				// iris data from R
				columns: [
					["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
					["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
					["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
					["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
				],
				type: 'scatter'
			},
			axis: {
				x: {
					label: 'Sepal.Width',
					tick: {
						fit: false
					}
				},
				y: {
					label: 'Petal.Width'
				}
			}
		});


	},

	render: function() {
		return (
		  <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Charts</h1>
                    </div>
                </div>

			<h1>Zoom and drag</h1>
			<div id="chart1a"></div>

			<h1>Range-select and drag</h1>
			<div id="chart1b"></div>

			<h1>Line charts</h1>
			<div id="chart2"></div>

			<h1>Line charts + bar chart</h1>
			<div id="chart3"></div>

			<h1>Stacked bar chart</h1>
			<div id="chart3b"></div>

			<h1>Area chart</h1>
			<div id="chart4"></div>

			<h1>Gauge chart</h1>
			<div id="chart5a"></div>

			<h1>Donut chart</h1>
			<div id="chart5b"></div>

			<h1>Scatter plot</h1>
			<div id="chart6"></div>

		  </div>
		);
  	}
});

