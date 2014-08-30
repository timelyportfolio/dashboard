/** @jsx React.DOM */

var Cortex	  		= require("cortexjs");
var React 			= require('react');

var Router  		= require('react-router');
var Route			= Router.Route;
var Routes 			= Router.Routes;
var Redirect 		= Router.Redirect;
var Link 			= Router.Link;

var RB 				= require('react-bootstrap');
var Nav 			= RB.Nav;
var Navbar 			= RB.Navbar;
var NavItem			= RB.NavItem;
var MenuItem 		= RB.MenuItem;
var DropdownButton	= RB.DropdownButton;
var DropdownButton	= RB.DropdownButton;
var ButtonGroup 	= RB.ButtonGroup;
var Button 			= RB.Button;

var NavBarTopLinks	= require('../components/navbar');
//var SideBar			= require('../components/sidebar');
var Index			= require('../components/index');

var App = module.exports = React.createClass({

	// style on nav: style="margin-bottom: 0"

	render: function() {
		
		//var users = this.props.cortex.users.map(function(user) {
		//  return <li key={user.id.val()}><p foo="user" userId={ user.name.val() }>{ user.name.val() }</p></li>;
		//});

		return (

			<div id="wrapper">

					<nav className="navbar navbar-default navbar-fixed-top" role="navigation" >
							<div className="navbar-header">

									{/*
									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
											<span className="sr-only">toggle navigation</span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
									</button>
									*/}

									<div className="navbar-brand" to="app"><a href="#/"><i className="fa fa-cube fa-fw"></i>dashboard</a></div>
							</div>

							<div id="NavBarTopLinks"> <NavBarTopLinks /> </div>

							{/* <div id="SideBar"> <SideBar cortex={this.props.cortex} /> </div> */}
					</nav>

					<div id="page-wrapper">
							 {this.props.activeRouteHandler() || <Index></Index>} 
					</div>

			</div>


		);
	},

});

// <NavBarTopLinks />
