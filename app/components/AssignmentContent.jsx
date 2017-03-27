var React = require('react');
var AssignmentNav = require('AssignmentNav');


var AssignmentContent = ({assignment}) => {
  return (
    <div className="assignment-content">
      <h2>{ assignment.title }</h2>
      <p>Due at { assignment.due_at }</p>
      <p>{ assignment.description }</p>
    </div>
  );
};

module.exports = AssignmentContent;
