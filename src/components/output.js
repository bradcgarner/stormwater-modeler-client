import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch }  from 'react-router-dom';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

import OutputGraphs from './output-graphs';
import OutputAnalysis from './output-analysis';

import OutputAsideGraphs from './output-aside-graphs';
import OutputAsideAnalysis from './output-aside-analysis';

// container div for output. Serves no purpose other than routing and positioning.
// routes /app/output...
// 'aside' components have more specific controlling exact paths
export function Output (props) {
  return (
    <div>
      <h1>Output</h1>
      <aside>
        <h4>aside</h4>
        <Switch>
          <Route exact path = '/app/output/graphs' component = {OutputAsideGraphs}/>
          <Route exact path = '/app/output/analysis' component = {OutputAsideAnalysis}/>
          <Redirect from = '*' to = '/home'/>
        </Switch>
      </aside>
      <Switch>
        <Route path = '/output/graphs' component = {OutputGraphs}/>
        <Route path = '/output/analysis' component = {OutputAnalysis}/>
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(Output);