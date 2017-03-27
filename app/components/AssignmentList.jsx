var React = require('react');
var {Link, IndexLink} = require('react-router');

var AssignmentList = React.createClass({
  render: function () {
    return (
      <div className="list-group">
        <a href="#" className="list-group-item" activeClassName="active">
          Assignment
        </a>
      </div>
    );
  }
})

module.exports = AssignmentList;
