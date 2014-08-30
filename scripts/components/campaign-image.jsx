/**
 * @jsx React.DOM
 */

var React = require('react');

var RB              = require('react-bootstrap');
var Row             = RB.Row;
var Col             = RB.Col;

var CampaignImage = React.createClass({

    propTypes: {
        campaign: React.PropTypes.object
    },

    render: function() {
        var campaign = this.props.campaign;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">

                    <div className="row">
                        <div className="col-xs-3">
							<i className="fa fa-th fa-5x"></i>
                        </div>
                        <div className="col-xs-9 text-right">
                            <div className="huge">6</div>
                            <div>Products</div>
                        </div>
                    </div>

                </div>
                <div className="panel-body">

					 <div className="row">
						<div className="col-xs-3">
							<a href="#" className="thumbnail">
								 <img src="http://placehold.it/350x350" className="img-responsive"></img>
							</a>
						</div>
						<div className="col-xs-3">
							<a href="#" className="thumbnail">
								 <img src="http://placehold.it/350x350" className="img-responsive"></img>
							</a>
						</div>
						<div className="col-xs-3">
							<a href="#" className="thumbnail">
								 <img src="http://placehold.it/350x350" className="img-responsive"></img>
							</a>
						</div>
						<div className="col-xs-3">
							<a href="#" className="thumbnail">
								 <img src="http://placehold.it/350x350" className="img-responsive"></img>
							</a>
						</div>
						<div className="col-xs-3">
							<a href="#" className="thumbnail">
								 <img src="http://placehold.it/350x350" className="img-responsive"></img>
							</a>
						</div>
						<div className="col-xs-3">
							<a href="#" className="thumbnail">
								 <img src="http://placehold.it/350x350" className="img-responsive"></img>
							</a>
						</div>

					</div>

                </div>
            </div>
        );
    }

});

module.exports = CampaignImage;
