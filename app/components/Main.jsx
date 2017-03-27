var React = require('react');
var AssignmentList = require('AssignmentList');

var Main = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <AssignmentList/>
          </div>
          <div className="col-md-8">
            <div className="row">
              Navbar
            </div>
            <div className="row well">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
