/** @jsx React.DOM */
var React   = require('react');

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader

var UploadForm  = module.exports = React.createClass({
  getInitialState: function() {
    return {
      myFileName: "",
      myFileHandle: {},
      myFileContent: "",
    };
  },
  
  handleChange: function(event) {
    console.log("handleChange() fileName = " + event.target.files[0].name);
    console.log("handleChange() file handle = " + event.target.files[0]);
    this.setState( {myFileName: event.target.files[0].name} );
    this.setState( {myFileHandle: event.target.files[0]} );
  },
  
  handleSubmit: function(e) {
    e.preventDefault();
    console.log("INSIDE: handleSubmit()");
    console.log("fileName = " + this.state.myFileName); 
    console.log("this.state.myFileHandle = " + this.state.myFileHandle);


    if (this.state.myFileHandle) {
      var file = this.state.myFileHandle;
      var name = this.state.myFileName;
      console.log('file: ' +  file);
      console.log('name: ' +  name);

	  var reader = new FileReader ();
	  reader.readAsText (file);
	  reader.onerror = function (ev) { console.log(ev); };
	  reader.onload = function (ev) {
		console.log(ev);
	    this.setState({ myFileContent : reader.result });
	  }.bind(this);
    }
  },
  
  render: function() {
      return  (
		<div>
			<h1 className="page-header">File uploading</h1>
			<form onSubmit={this.handleSubmit}>
			  <input type="file" onChange={this.handleChange} id="profilePhotoFileUpload" />
			  <input type="submit" value="Post" />
			</form>

			<pre> {this.state.myFileContent} </pre>
		</div>
      );
  }
});
