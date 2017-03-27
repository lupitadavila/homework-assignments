var React = require('react');
var AssignmentNav = require('AssignmentNav');
var moment = require('moment');

var AssignmentContent = ({assignment}) => {
  return (
    <div className="assignment-content">
      <h2>{ assignment.title }</h2>
      <p>Due { moment(assignment.due_at).format("dddd, MMMM Do YYYY")}</p>
      <p>{ assignment.description }</p>
    </div>
  );
};

module.exports = AssignmentContent;
