var React = require('react');
var {Link, IndexLink} = require('react-router');

var AssignmentNav = ({id}) => {
    return (
      <div className="row">
        <ul className="nav nav-tabs">
          <li role="presentation" activeClassName="active">
            <Link to={`/assignments/${id}`}>Assignment</Link>
          </li>
          <li role="presentation" activeClassName="active">
            <Link to={`/assignments/${id}/submissions`}>Submissions</Link>
          </li>
        </ul>
      </div>
    );
  };

module.exports = AssignmentNav;
