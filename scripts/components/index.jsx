/** @jsx React.DOM */

var React	= require('react');

var RB		= require('react-bootstrap');
var Modal  	= RB.Modal;
var ModalTrigger = RB.ModalTrigger;
var Button	= RB.Button;

var d3 = require('d3');


var MyModal = React.createClass({
  render: function() {
    return this.transferPropsTo(
        <Modal title="Modal heading" animation={true}>
          <div className="modal-body">
            <h4>Text in a modal</h4>
			<p>Lorum ipsum</p>
          </div>
          <div className="modal-footer">
            <Button onClick={this.props.onRequestHide}>Close</Button>
          </div>
        </Modal>
      );
  }
});


var Index = module.exports = React.createClass({
  render: function() {
    return (
      <div>
			<div className="row">
				<div className="col-lg-12">
					<h1 className="page-header">info tiles</h1>
				</div>
			</div>


			<div className="row">
		  
			  <div className="col-md-3 col-sm-4 col-xs-6">

				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>

			  <div className="col-md-3 col-sm-4 col-xs-6">
				<div className="dummy"></div>
				<p href="#/" className="thumbnail purple">
					<ModalTrigger modal={<MyModal />}>
					  <a href="#/">info</a>
					</ModalTrigger>
				</p>
			  </div>


			  
			</div>


      </div>
    );
  }
});

