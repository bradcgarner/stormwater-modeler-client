import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Route, BrowserRouter , Link}  from 'react-router-dom';
import { Redirect } from 'react-router';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// app name and logo. 
// routes /home, /user/login, /user/create
export function Cover (props) {
  return (
    <header>
      <h1>GRSWM</h1>
      <h4>Green Roof Stormwater Modeler</h4>
    </header>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(Cover);