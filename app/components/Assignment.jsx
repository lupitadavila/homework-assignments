var React = require('react');
var edmodoAssignmentAPI = require('edmodoAssignmentAPI');

var Assignment = React.createClass({
  getInitialState: function (){
    return {
      isLoading: false
    }
  },
  handleAssignments: function (location){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    edmodoAssignmentAPI.getAssignments().then(function (temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
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
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return hii;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>

        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Assignment;
