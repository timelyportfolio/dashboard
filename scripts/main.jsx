/** @jsx React.DOM */

//require("~bootstrap/dist/css/bootstrap.min.css");
//require("../node_modules/font-awesome/css/font-awesome.min.css");
//require("../css/font-awesome.min.css");
//require("../css/bootstrap.min.css");
require("../css/base.less");

var Cortex          = require("cortexjs");

//var minimongo 		= require("minimongo");

var React           = require('react');

var Router          = require('react-router');
var Route           = Router.Route;
var Routes          = Router.Routes;
var Redirect        = Router.Redirect;
var Link            = Router.Link;

var App         	= require('./components/app');
var Notes          	= require('./components/notes');
var Charts         	= require('./components/charts');
var Dashboard  		= require('./components/dashboard');
var Campaign   		= require('./components/campaign');
var SmartTable 		= require('./components/smarttable');
var BigForm    		= require('./components/bigform');
var Help      		= require('./components/help');
var Campaign   		= require('./components/campaign');
var Index  			= require('./components/index');
var DataSourceAdmin = require('./components/datasource-admin');

var appdata = {
	a: 100,								// this.props.cortex.a.val()
	b: [1, 2, 3],						// this.props.cortex.b.val()
	c: false, 							// this.props.cortex.c.val()
	d: {test1: true, test2: false},		// this.props.cortex.d.test1.val()
	users: [							// this.props.cortex.users.val()
		{name: "Mimi", id: 2, age: 50}, // this.props.cortex.users.map()
		{name: "Simi", id: 1, age: 45},
		{name: "Pim", id: 6, age: 11},
		{name: "Fred", id: 8, age: 11},
		{name: "Marge", id: 9, age: 11},
		{name: "Hilde", id: 10, age: 11},
	   ],
	notes: [],
	datasources: [
		{id: 'ahzhmjps60004345933dhzinl', name: "People", url: 'data/people.json', type: 'json'},
		{id: 'dhzhmjps60004345933fhzinl', name: "OECD", url: 'data/oecd-canada.json', type: 'json-stat'},
	],
	datasource_chosen: '',
	datasource_data_id: '',
	datasource_data: '',
};

var cortex = new Cortex(appdata);

var routes = (
  <Route handler={App} cortex={cortex}>
	<Route name="datasources" handler={DataSourceAdmin} cortex={cortex}/>
	<Route name="notes"  handler={Notes} cortex={cortex} />
	<Route name="charts" handler={Charts}/>
	<Route name="campaign" handler={Campaign}/>
	<Route name="smarttable" handler={SmartTable} cortex={cortex} />
	<Route name="bigform" handler={BigForm}/>
	<Route name="help" handler={Help}/>
	<Route name="index" handler={Index}/>
  </Route>
);

var rootComponent = React.renderComponent(
  <Routes children={routes} />,
  document.body
);

/*
var IndexedDb = minimongo.IndexedDb;

// Create IndexedDb
db = new IndexedDb({namespace: "dashboard"}, function() {
    // Add a collection to the database
    db.addCollection("cortex", function() {
        doc = { species: "dog", name: "Bingo" };

        // Always use upsert for both inserts and modifies
        db.cortex.upsert(doc, function() {
            // Success:

            // Query dog (with no query options beyond a selector)
            db.cortex.findOne({ species:"dog" }, {}, function(res) {
                console.log("Dog's name is: " + res.name);
            });
        });
    });
}, function() { alert("some error!"); });
*/

cortex.on("update", function(updatedState) {

	rootComponent.setProps({cortex: updatedState});

	//doc = JSON.stringify({updatedState}) ;
	//console.log(doc);
	//db.cortex.upsert(doc, function() {
	//	console.log('your indexdb was updated');
	//});
});

/*
databaseExists('IDBWrapper-minimongo_dashboard', function (yesno) {
    //alert (dbName + " exists? " + yesno);
	console.log(yesno);
});

function databaseExists(dbname, callback) {
    var req = indexedDB.open(dbname);
    var existed = true;
    req.onsuccess = function () {
        req.result.close();
        if (existed){
			console.log('db exists');
            //indexedDB.deleteDatabase(dbname);
		}
        callback(existed);
    };
    req.onupgradeneeded = function () {
        existed = false;
    };
}
*/

/*

<Route name="user" path="/user/:userId" handler={User}>
  <Route name="task" path="/user/:userId/tasks/:taskId" handler={Task}/>
  <Redirect from="/user/:userId/todos/:taskId" to="task"/>
</Route>

var User = React.createClass({
  render: function() {
    return (
      <div className="User">
        <h1>User id: {this.props.params.userId}</h1>
        <ul>
          <li><Link to="task" userId={this.props.params.userId} taskId="foo">foo task</Link></li>
          <li><Link to="task" userId={this.props.params.userId} taskId="bar">bar task</Link></li>
        </ul>
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});

var Task = React.createClass({
  render: function() {
    return (
      <div className="Task">
        <h2>User id: {this.props.params.userId}</h2>
        <h3>Task id: {this.props.params.taskId}</h3>
      </div>
    );
  }
});
*/


