var React = require('react');
var AssignmentNav = require('AssignmentNav');

var SubmissionsContent = React.createClass({
  onSubmissionClick: function(e){
    e.preventDefault();
    var content = '#' + this.props.submission.id;

    console.log(content);
    $(content).toggleClass('in');
    console.log(this.props.submission.id);
  },
  render: function(){
    //var {submission,open} = this.state;
    var submission = this.props.submission;
    return (
      <div className="col-md-12">
        <div className="row submission" href={`#${ submission.id }`} onClick={ this.onSubmissionClick }>
          <div className="col-md-4"><img src={ submission.creator.avatars.large } alt="" /></div>
          <div className="col-md-8">
            <h3>{`${ submission.creator.first_name } ${ submission.creator.last_name }`}</h3>
            <p>{`Turned in ${ submission.submitted_at }`}</p>
          </div>
        </div>
        <div className="collapse submission-content" id={ submission.id }>
          <p>{ submission.content }</p>
        </div>
      </div>
    );
  }
});

module.exports = SubmissionsContent;
