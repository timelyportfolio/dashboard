/** @jsx React.DOM */
/*jshint newcap: false */

(function () {
   'use strict';

	// -- styles --
	require("bootstrap/dist/css/bootstrap.min.css");
	//require("font-awesome/css/font-awesome.min.css"); // broken
	require("../styles/base.less");

	// -- scripts --
	//require("jquery/dist/jquery.min.js"); // broken: bootstrap cant see jquery for some reason
	require("bootstrap/dist/js/bootstrap.min.js");
	require("d3/d3.min.js");
	// broken: c3js npm package
	// broken: pouchdb npm package

	// -- modules --
	var StateMachine 	= require("javascript-state-machine");
	var Cookies 		= require("cookies-js");
	var Cortex          = require("cortexjs");
	//var PouchDB 		= require("pouchdb"); // broken: missing dependencies??

	var React           = require('react');

	var Router          = require('react-router');
	var Route           = Router.Route;
	var Routes          = Router.Routes;
	var Redirect        = Router.Redirect;
	var Link            = Router.Link;

	var App         	= require('./components/app');
	var Notes          	= require('./components/notes');
	var Charts         	= require('./components/charts');
	var Campaign   		= require('./components/campaign');
	var SmartTable 		= require('./components/smarttable');
	var Contact    		= require('./components/contact');
	var Help      		= require('./components/help');
	var Index  			= require('./components/index');
	var DataSourceAdmin = require('./components/datasource-admin');

	var fsm = StateMachine.create({
		initial: 'initial',
		events: [ // to change the state
			{ name: 'loadcookie',	from: 'initial', 		to: 'cookieloaded' },
			{ name: 'loaddb',		from: 'cookieloaded',	to: 'dbloaded'    },
			{ name: 'loadcortex',	from: 'dbloaded',  		to: 'cortexloaded' },
				// todo: datasourceactive
					// todo: datasourceloaded
						// todo: ...
				// todo: widgetsloaded?
					// todo: dashboardloaded
			{ name: 'unloadcortex',	from: 'cortexloaded',	to: 'dbloaded'  },
			{ name: 'unloaddb',		from: 'dbloaded',		to: 'cookieloaded'  },
			{ name: 'unloadcookie', from: 'cookieloaded',	to: 'initial'  },
		],
		callbacks: { // to listen to state transitions
			onnostate:		function(event, from, to) { console.log('state: initial'); },
			onloadcookie:	function(event, from, to) { console.log('state: cookie loaded'); },
			onloaddb:		function(event, from, to) { console.log('state: db loaded'); },
			onloadcortex:	function(event, from, to) { console.log('state: cortex loaded'); },
			onunloadcortex:	function(event, from, to) { console.log('state: cortex unloaded'); },
			onunloaddb:		function(event, from, to) { console.log('state: db unloaded'); },
			onunloadcookie:	function(event, from, to) { console.log('state: cookie unloaded'); },
		}
	});

	var appdata = {
		notes: [],

		datasources: {
			ahzhmjps60004345933dhzinl: { name: "People", url: 'data/people.json', type: 'json', data: '' },
			bhzhmjps60004345933fhzinl: { name: "People2", url: 'data/people2.json', type: 'json', data: '' },
		},
		datasource_active_id: '',
	};

	if (Cookies.enabled) {
		Cookies.set('dashboard-login-token', 'mytoken');
		fsm.loadcookie();
	}
	else{
		console.log('warning: unable to set cookie, please allow for cookies.');
	}

	// note: during development delete DB with: indexedDB.deleteDatabase("_pouch_dashboardDB");
	var pouchdb = new PouchDB('dashboardDB', {auto_compaction : true }, function(error, result){
		if (error){
			console.log('warning: unable to set pouchdb database.');
		}
		else {
			fsm.loaddb();
		}
	});

	var cortex_active = false;

	pouchdb.changes().on('change', function() {
		console.log('Ch-Ch-Changes');
	});

	var cortex 	= new Cortex(appdata, function(){
		if (!cortex_active){
			fsm.loadcortex();
		}
		cortex_active = true;
	});

	//console.log( fsm.current );

	var routes = (
		<Route handler={App} cortex={cortex}>
			<Route name="datasources" handler={DataSourceAdmin} cortex={cortex}/>
			<Route name="notes"  handler={Notes} cortex={cortex}/>
			<Route name="charts" handler={Charts} cortex={cortex}/>
			<Route name="campaign" handler={Campaign}/>
			<Route name="smarttable" handler={SmartTable} cortex={cortex}/>
			<Route name="contact" handler={Contact}/>
			<Route name="help" handler={Help}/>
			<Route name="index" handler={Index}/>
	  	</Route>
	);

	var rootComponent = React.renderComponent( <Routes children={routes} />, document.body);

	//pouchdb.put( { _id: 'dave@gmail.com', name: 'David', age: 67} );

	cortex.on("update", function(updatedState) {
		rootComponent.setProps({cortex: updatedState});

		var o = {cortex: (JSON.stringify( updatedState)) };
		 
		// create "_id" string if we don't have one.
		//if (event.target._id.value == '') {
			o._id = new Date().getTime() + '';
		//}
		//else {
		//	o._id = event.target._id.value;
		//}

		pouchdb.put(o, function(error, response) {

			if (error) {
				console.log('error: ' + error);
				return;
			}
			else if(response && response.ok) {
			  console.log("pouchdb stored the data");
			}
		});

	});

}());
