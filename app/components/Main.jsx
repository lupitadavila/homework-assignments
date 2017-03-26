var React = require('react');
import 'react-bootstrap';

var Main = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            AssignmentList
          </div>
          <div className="col-md-9">
            <div className="row">
              Navbar
            </div>
            <div className="row">
              <p className="well">Main.jsx rendered</p>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
