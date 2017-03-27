var React = require('react');
var {Link, IndexLink} = require('react-router');

var AssignmentNav = ({assignment}) => {
    return (
      <div className="row">
        <ul className="nav nav-tabs">
          <li role="presentation" activeClassName="active">
            <Link to={`/assignments/${assignment.id}`}>Assignment</Link>
          </li>
          <li role="presentation" activeClassName="active">
            <Link to={`/assignments/${assignment.id}/submissions`}>Submissions</Link>
          </li>
        </ul>
      </div>
    );
  };

module.exports = AssignmentNav;
