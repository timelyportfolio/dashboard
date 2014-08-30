/** @jsx React.DOM */
var React = require('react');

var RB = require('react-bootstrap');
var Form = RB.Form;
var ButtonToolbar = RB.ButtonToolbar;
var ButtonGroup = RB.ButtonGroup;
var Button = RB.Button;
var Badge = RB.Badge;
var TabbedArea = RB.TabbedArea;
var TabPane = RB.TabPane;
var Table = RB.Table;
var Panel = RB.Panel;
var Input = RB.Input;
var Grid = RB.Grid;
var Row = RB.Row;
var Col = RB.Col;
var Accordion = RB.Accordion;

var NotesList = React.createClass({

	render: function() {

    	var createItem = function(itemText, index) {
        	return (
           		<div key={index} >
               		<Panel bsStyle="primary" header="...">
                   		{itemText}
					</Panel>
				</div>
			);
    };

    return (
		<div>
       		{this.props.cortex.notes.map(createItem)}
		</div>
	);
  }
});

var Notes = module.exports = React.createClass({

	// items: this.props.cortex.notes,

    onChange: function(e) {
    	//text: e.target.value
    },

    handleKeyDown: function(e) {
        if (e.keyCode == 13) {
            return this.handleSubmit(e);
        }
    },

    clearAll: function(e) {
        e.preventDefault();

		this.props.cortex.notes = [];
    	// items: [],
        // text: ''
    },

    handleSubmit: function(e) {
        e.preventDefault();
		this.props.cortex.notes.push(this.props.note_text);

        //var nextItems = this.state.items.concat([this.state.text]);
        //var nextText = '';
    	// items: nextItems,
        // text: nextText
    },

    validationState: function() {
		/*
        var length = this.props.note_text.val().length;
        if (length > 5) return 'success';
        else if (length > 3) return 'warning';
        else if (length > 0) return 'error';
		*/
    },

    undo: function() {
        // https://github.com/DanilloCorvalan/reactjs-undo-example/blob/master/source/components.jsx
        //return this.state.pop();
    },

    render: function() {
		console.log(this.props.cortex);

        return (

			<div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Notes</h1>
                    </div>
				</div>

				<p/>
				<NotesList cortex={this.props.cortex}/>

				<p/>
				<Input
					type="text"
					value={this.props.cortex.note_text.val()}
					placeholder="Enter text"
					label=""
					required={true}
					help="Validates based on string length."
					bsStyle={this.validationState()}
					hasFeedback
					ref="input"
					groupClassName="group-class"
					wrapperClassName="wrapper-class"
					labelClassName="label-class"
					onKeyDown={this.handleKeyDown}
					onChange={this.onChange}
				/>
				<ButtonToolbar>
					<Button
						onClick={this.handleSubmit}
						bsStyle="primary" > add
					</Button>
					<Button
						onClick={this.clearAll}
						type="#"
						bsStyle="danger" >
						clear all
					</Button>
				</ButtonToolbar>
			</div>

        );
    }

});


/*
var Alert = RB.Alert;

var AlertDismissable = React.createClass({
  getInitialState: function() {
    return {
      alertVisible: true
    };
  },

  render: function() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4><i className="fa fa-warning fa-2x"></i> Oh snap! An error occured!</h4>
          <p>Change this and then try it again.</p>
          <p><br/>
            <Button bsStyle="danger">Take this action</Button> or &nbsp;
            <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
          </p>
        </Alert>
        );
    }

    return (
      <Button onClick={this.handleAlertShow}>Show Alert</Button>
      );
  },

  handleAlertDismiss: function() {
    this.setState({alertVisible: false});
  },

  handleAlertShow: function() {
    this.setState({alertVisible: true});
  }
});
*/


