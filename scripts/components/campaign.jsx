/**
 * @jsx React.DOM
 */

var React = require('react');

var CampaignImage = require('../components/campaign-image');
var CampaignImpression = require('../components/campaign-impression');
var CampaignClick = require('../components/campaign-click');
var CampaignAction = require('../components/campaign-action');


var Campaign = module.exports =  React.createClass({

    getInitialState: function() {
        return {
            //Campaign: CampaignStore.getCurrentCampaign()
        };
    },

    componentDidMount: function() {
        //CampaignStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        //CampaignStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var Campaign = this.state.Campaign;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">{'Campaign: ' + '2014 Q3'}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6"><CampaignImpression Campaign="" /></div>
                    <div className="col-lg-3 col-md-6"><CampaignClick Campaign="" /></div>
                    <div className="col-lg-3 col-md-6"><CampaignAction Campaign="" /></div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <CampaignImage Campaign="" />
                    </div>
                </div>
            </div>
        );
    },

    _onChange: function() {
        this.setState(this.getInitialState());
    }

});
