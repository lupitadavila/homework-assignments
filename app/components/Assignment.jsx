var React = require('react');
var edmodoAssignmentAPI = require('edmodoAssignmentAPI');
var AssignmentContent = require('AssignmentContent');
var AssignmentNav = require('AssignmentNav');

var Assignment = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false,
      activeTabClassName: "tab1"
    }
  },
  handleAssignment: function (id){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      id: undefined,
      assignment: undefined
    });

    edmodoAssignmentAPI.getAssignment(id).then(function (assignment){
      that.setState({
        isLoading: false,
        id: id,
        assignment: assignment
      });
    }, function (e){
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var id = this.props.params.id
    console.log(id);
    if(id && id.length > 0){
      this.handleAssignment(id);
    }
  },
  componentWillReceiveProps: function (newProps) {
    var id = newProps.params.id;
    if(id && id.length > 0){
      this.handleAssignment(id);
    }
  },
  render: function () {
    var {isLoading, id, assignment, errorMessage} = this.state;

    function renderAssignment () {
      if (isLoading) {
        return <h3 className="text-center">Fetching assignment...</h3>;
      } else if (assignment) {
        return <AssignmentContent assignment={ assignment } />
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
      <div>
        <AssignmentNav id={id} active={this.state.activeTabClassName} />
        <div className="row well">
          {renderAssignment()}
          {renderError()}
        </div>
      </div>
    )
  }
});

module.exports = Assignment;
