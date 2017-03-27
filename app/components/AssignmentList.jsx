var React = require('react');
var edmodoAssignmentAPI = require('edmodoAssignmentAPI');
var {Link, IndexLink} = require('react-router');

var AssignmentList = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false
    }
  },
  handleAssignments: function (assignments){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      assignments: undefined
    });

    edmodoAssignmentAPI.getAssignments().then(function (assignments){
      that.setState({
        isLoading: false,
        assignments: assignments
      });
    }, function (e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    this.handleAssignments();
    window.location.hash = '#/';
  },
  render: function () {
    var {isLoading, assignments, errorMessage} = this.state;

    function renderAssignments () {
      if (isLoading) {
        return <h3 className="text-center">Fetching assignments...</h3>;
      } else if (assignments) {
        return assignments.map(function(assignment, i){
          console.log(assignment, i);
          return <a href="Assignment" params={{ assignmentId: assignment.id }} className="list-group-item" key={i}>{ assignment.title }</a>;
        });
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          errorMessage
        )
      }
    }

    return (
      <div className="list-group">
        {renderAssignments()}
        {renderError()}
      </div>
    )
  }
})

module.exports = AssignmentList;
