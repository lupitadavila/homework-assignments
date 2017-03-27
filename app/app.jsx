var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Assignment = require('Assignment');
var SubmissionList = require('SubmissionList');

// App css
require('style!css!sass!applicationStyles')

// Set up app routes
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="assignments/:id" component={Assignment}/>
      <Route path="assignments/:id/submissions" component={SubmissionList}/>
      <IndexRoute component={Assignment}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
