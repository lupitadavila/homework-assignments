var React = require('react');
var AssignmentNav = require('AssignmentNav');

var SubmissionsContent = ({submission}) => {
  return (
    <div>
      <AssignmentNav assignment={assignment} />
      <div className="row well">
        <h2>{ assignment.title }</h2>
        <p>{ assignment.due_date }</p>
        <p>{ assignment.description }</p>
      </div>
    </div>
  );
};

module.exports = SubmissionsContent;