var React = require('react');
var edmodoAssignmentAPI = require('edmodoAssignmentAPI');

var Assignment = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false
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
      // window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var id = newProps.params.id;
    if(id && id.length > 0){
      this.handleAssignment(id);
      // window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, id, assignment, errorMessage} = this.state;

    function renderAssignment () {
      if (isLoading) {
        return <h3 className="text-center">Fetching assignment...</h3>;
      } else if (assignment) {
        return (
          <div>
            <h1>{ assignment.title }</h1>
            <p>{ assignment.due_at }</p>
            <p>{ assignment.description }</p>
          </div>
        )
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
        {renderAssignment()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Assignment;
