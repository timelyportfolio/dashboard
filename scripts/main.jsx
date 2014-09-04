/** @jsx React.DOM */

// -- styles --
require("bootstrap/dist/css/bootstrap.min.css");
//require("font-awesome/css/font-awesome.min.css"); // broken
require("../styles/base.less");

// -- scripts --
//require("jquery/dist/jquery.min.js"); // broken: bootstrap cant see jquery for some reason
require("bootstrap/dist/js/bootstrap.min.js");
require("d3/d3.min.js");
// broken: c3js npm package
// broken: pouchdc npm package

// -- modules --
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
var Campaign   		= require('./components/campaign');
var Index  			= require('./components/index');
var DataSourceAdmin = require('./components/datasource-admin');

var appdata = {
	notes: [],

	datasources: {
		ahzhmjps60004345933dhzinl: { name: "People", url: 'data/people.json', type: 'json', data: '' },
		bhzhmjps60004345933fhzinl: { name: "People2", url: 'data/people2.json', type: 'json', data: '' },
	},
	datasource_active_id: '',
};

// cookie check...
if (Cookies.enabled) {
    Cookies.set('dashboard-db', 'foo');
}

// localdb check...
var pouchdb = new PouchDB('dashboard', {auto_compaction : true});

// app state check...
var cortex 	= new Cortex(appdata);

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

var rootComponent = React.renderComponent(
  <Routes children={routes} />,
  document.body
);

cortex.on("update", function(updatedState) {
	rootComponent.setProps({cortex: updatedState});
});
