/**
 * @jsx React.DOM
 */

var React 	= require('react');

var Router  = require('react-router');
var Link    = Router.Link;

var RB             		= require('react-bootstrap');
var Nav               	= RB.Nav;
var Navbar             	= RB.Navbar;
var NavItem            	= RB.NavItem;
var MenuItem            = RB.MenuItem;
var DropdownButton      = RB.DropdownButton;
var DropdownButton      = RB.DropdownButton;



var NavBarTopLinks = React.createClass({

    render: function() {
        return (
		  <Nav className="nav navbar-top-links navbar-right">

			<DropdownButton key={10} className="fa fa-bar-chart-o" title="" label="dropdownMenu">
			  <MenuItem className="fa fa-bar-chart-o" key="10"><Link to="charts">charts</Link></MenuItem>
			  <MenuItem className="fa fa-bullseye" key="20"><Link to="campaign">campaigns</Link></MenuItem>
			  <MenuItem  className="fa fa-table" key="30"><Link to="smarttable">tables</Link></MenuItem>
			  <MenuItem  className="fa fa-comment"  key="40"><Link to="notes">notes</Link></MenuItem>
			</DropdownButton>

			<DropdownButton key={60} className="fa fa-support" title="">
			  <MenuItem key="50"><Link to="help">online help</Link></MenuItem>
			  <MenuItem key="60"><Link to="help">contact form</Link></MenuItem>
			</DropdownButton>

			<DropdownButton key={80} className="fa fa-user" title="">
			  <MenuItem key="1" className="fa fa-user" >profile</MenuItem>
			  <MenuItem key="2" className="fa fa-gear" >settings</MenuItem>
			  <MenuItem divider />
			  <MenuItem key="4" className="fa fa-sign-out">logout</MenuItem>
			</DropdownButton>

			{ /* <NavItem key={200} href="#/">Link</NavItem> */ }

		  </Nav>
        );
    }

});

module.exports = NavBarTopLinks;
