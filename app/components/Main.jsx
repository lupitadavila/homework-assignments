var React = require('react');
var AssignmentList = require('AssignmentList');

var Main = (props) => {
  return (
    <div>
      <div className="container">
        <header>
          <h1>Homework App</h1>
        </header>
        <div className="row">
          <div className="col-md-4">
            <AssignmentList/>
          </div>
          <div className="col-md-8">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
