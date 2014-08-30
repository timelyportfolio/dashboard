/**
 * @jsx React.DOM
 */

var React = require('react');
var SidebarList = require('../components/sidebar-list');

var SideBar = React.createClass({

    render: function() {
        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <SidebarList/>
                    </ul>
                </div>
            </div>
        );
    }

});

module.exports = SideBar;
