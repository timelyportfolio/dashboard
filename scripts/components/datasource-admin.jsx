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

var cuid = require('cuid');

var List = React.createClass({

	edit: function(e) {
		console.log("edit");
	},

	// todix: pass "id" as an event-handler argument
	//remove: function(e, id) {
	//	console.log(id);
	//},

	render: function() {

    	var createItem = function(id, item) {
			//console.log(id);
        	return (
           		<div key={id} >
               		<Panel bsStyle="primary" header={item.name}>

                   		URL: <a href={item.url}>{item.url}</a>

					<ButtonToolbar>
						<Button
							onClick={this.edit}
							bsStyle="primary" >
							{'edit' }
						</Button>
						<Button
							onClick={ function(){
								this.props.cortex.datasources.destroy(id);
							}.bind(this)}
							type="#"
							bsStyle="danger" >
							remove
						</Button>
					</ButtonToolbar>


					</Panel>
				</div>
			);
    	}.bind(this);

		var sources = [];

		this.props.cortex.datasources.forEach( function(id, d){
			sources.push( createItem(id, d.val()) );
		}); 

		return (<div> {sources} </div>);
  }
});

var DataSourceAdmin = module.exports = React.createClass({

    getInitialState: function() {
        return {
            items: [],
            text: ''
        };
    },

    onChange: function(e) {
        this.setState({
            text: e.target.value
        });
    },

    handleKeyDown: function(e) {
        if (e.keyCode == 13) {
            return this.handleSubmit(e);
        }
    },

    clearAll: function(e) {
        e.preventDefault();
        this.replaceState({
            items: [],
            text: ''
        });

		this.props.cortex.notes.set([]);
    },

    handleSubmit: function(e) {
        e.preventDefault();

        var nextItems = this.state.items.concat([this.state.text]);

		this.props.cortex.notes.push(this.state.text);
		//console.log(this.props.cortex.notes);

        var nextText = '';

        this.setState({
            items: nextItems,
            text: nextText
        });
    },

    validationState: function() {
        var length = this.state.text.length;
        if (length > 5) return 'success';
        else if (length > 3) return 'warning';
        else if (length > 0) return 'error';
    },

    undo: function() {
        // https://github.com/DanilloCorvalan/reactjs-undo-example/blob/master/source/components.jsx
        //return this.state.pop();
    },

    render: function() {
        return (

			<div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">data sources</h1>
                    </div>
				</div>

				<p/>
				<Input
					type="text"
					value={this.state.text}
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
						bsStyle="primary" >
						{'Add #' + (this.state.items.length + 1)}
					</Button>
					<Button
						onClick={this.clearAll}
						type="#"
						bsStyle="danger" >
						clear all
					</Button>
				</ButtonToolbar>

				<p/>
				<List items={this.state.items} cortex={this.props.cortex} />
				
			</div>

        );
    }

});
