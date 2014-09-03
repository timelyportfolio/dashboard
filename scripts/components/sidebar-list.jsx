/**
 * @jsx React.DOM
 */

var React   = require('react');

var Router  = require('react-router');
var Link 	= Router.Link;

//var SidebarListItem = require('../components/sidebar-listitem');

var RB              = require('react-bootstrap');
var Accordion  		= RB.Accordion;
var Panel  			= RB.Panel;


var SidebarList = React.createClass({

    getInitialState: function() {
        return {
			//Sidebars: mockSidebars,
        };
    },

    componentDidMount: function() {
		//SidebarStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
		//SidebarStore.removeChangeListener(this._onChange);
    },

    render: function() {

		/*
        var items = this.state.Sidebars.map(function(Sidebar) {
            return (
                <SidebarListItem key={Sidebar.id}
                                  Sidebar={Sidebar}
                                  currentSidebarID={this.state.currentSidebarID} />
            );
        }, this);
		*/

        return (
			<div className="sidebar-panel">
			  <Accordion>
				<Panel header="charts" key={20} className="sidebar-panel-item">
                    <h4><Link to="charts">2014-8</Link></h4>
				</Panel>
				<Panel header="reports" key={30}  className="sidebar-panel-item">
                    <li><h4><Link to="campaign">2014 q3</Link></h4></li>
				</Panel>
				<Panel header="explore" key={40}  className="sidebar-panel-item">
                    <h4><Link to="smarttable">table search</Link></h4>
				</Panel>
				<Panel header="notes" key={50} className="sidebar-panel-item">
                    <h4><Link to="notes">add a note</Link></h4>
				</Panel>
				<Panel header="support" key={60}  className="sidebar-panel-item">
                    <li><h4><Link to="help">online help</Link></h4></li>
                    <li><h4><Link to="contact">contact form</Link></h4></li>
				</Panel>
			  </Accordion>

			</div>
        );
    },

    _onChange: function() {
        this.setState(this.getInitialState());
    }

});

module.exports = SidebarList;
