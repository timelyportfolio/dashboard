/*

Assumptions
-----------

These aren't prescriptive, they're just a log of the decisions that had to be
made when writing the code below:

* User input maps directly to context component state by name

* State for the following inputs which represent multiple values with the same
  name is an Array of Strings:

  * Multiple selects
  * Checkbox groups

* If a checkbox is not part of a same-named group, its state is Boolean

* The user agent implements/has:

  * Array.isArray()
  * Array.prototype.indexOf()
  * NodeList or HTMLCollection type for same-named inputs in form.elements

*/

var handleForm = module.exports =  function (e) {
  var el = e.target;
  var name = el.name;
  var type = el.type;
  var stateChange = {};

  if (type == 'select-multiple') {

    var selectedOptions = [];

    for (var i = 0, l = el.options.length; i < l; i++) {
      if (el.options[i].selected) {
        selectedOptions.push(el.options[i].value);
      }
    }

    stateChange[name] = selectedOptions;
  }
  else if (type == 'checkbox') {

    var objType = Object.prototype.toString.call(el.form.elements[name]);

    if (objType == '[object NodeList]' || objType == '[object HTMLCollection]') {

      var checkedBoxes = (Array.isArray(this.state[name]) ? this.state[name].slice() : []);

      if (el.checked) {
        checkedBoxes.push(el.value);
      }
      else {
        checkedBoxes.splice(checkedBoxes.indexOf(el.value), 1);
      }
      stateChange[name] = checkedBoxes;
    }
    else {
      stateChange[name] = el.checked;
    }
  }
  else {
    stateChange[name] = el.value;
  }

  this.setState(stateChange);
};

/* 

var UploadImageForm = React.createClass({
  getInitialState: function() {
    return {
      myFileName: "",
      myFileHandle: {}
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
      console.log("INSIDE if test myFileHandle.length");
      var file = this.state.myFileHandle;
      var name = this.state.myFileName;
      var parseFile = new Parse.File(name, file);


      var myUser = new Parse.Object("TestObj");
      myUser.set("profilePicFile", parseFile);
      myUser.save()
        .then(function() {
          // The file has been saved to User.
          this.setState( {myFileHandle: null} );
          console.log("FILE SAVED to Object: Parse.com");
        }.bind(this), function(error) {
          // The file either could not be read, or could not be saved to Parse.
          console.log("ERROR: Parse.com " + error.code + " " + error.message);
        });;
    } // end if

  },
  
  render: function() {
      return  (

        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleChange} id="profilePhotoFileUpload" />
          <input type="submit" value="Post" />
        </form>
      );
  }
});

*/
