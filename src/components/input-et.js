import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to input. No user input. Displays ET tables. User selects ET table in aside.
// route app/input/et
// 'aside' components have more specific controlling exact paths
export function InputET (props) {
  return (
    <aside>
      <h4>Input ET</h4>
    </aside>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(InputET);