var React = require('react');

var AssignmentContent = ({title, description, due}) => {
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ due }</p>
      <p>{ description }</p>
    </div>
  );
};

module.exports = AssignmentContent;
