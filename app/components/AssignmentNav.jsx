var React = require('react');
var {Link, IndexLink} = require('react-router');

var AssignmentNav = ({id, active}) => {
    return (
      <nav className="row nav-assignment">
        <ul className="nav nav-tabs">
          <li role="presentation" className={(active === "tab1") ? "active" : ""}>
            <Link to={`/assignments/${id}`}>Assignment</Link>
          </li>
          <li role="presentation" className={(active === "tab2") ? "active" : ""}>
            <Link to={`/assignments/${id}/submissions`}>Submissions</Link>
          </li>
        </ul>
      </nav>
    );
  };

module.exports = AssignmentNav;
