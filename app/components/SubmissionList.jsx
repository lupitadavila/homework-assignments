var React = require('react');
var edmodoSubmissionsAPI = require('edmodoSubmissionsAPI');
var {Link, IndexLink} = require('react-router');

var SubmissionList = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false
    }
  },
  handleSubmissions: function (id){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      id: undefined,
      submissions: undefined
    });

    edmodoSubmissionsAPI.getSubmissions(id).then(function (submissions){
      that.setState({
        isLoading: false,
        id: id,
        submissions: submissions
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
      this.handleSubmissions(id);
    }
  },
  componentWillReceiveProps: function (newProps) {
    var id = newProps.params.id;
    if(id && id.length > 0){
      this.handleSubmissions(id);
    }
  },
  render: function () {
    var {isLoading, id, submissions, errorMessage} = this.state;

    function renderSubmissions () {
      if (isLoading) {
        return <h3 className="text-center">Fetching submissions...</h3>;
      } else if (submissions) {
        return submissions.map(function(submission, i){
          return <div>{ submission.content }</div>;
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
        {renderSubmissions()}
        {renderError()}
      </div>
    )
  }
})

module.exports = SubmissionList;
