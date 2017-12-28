import React from 'react';
import { connect } from 'react-redux';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';
import LandingFooter from './landing-footer';
import Cover from './cover';

// landing page prior to login
// route /home
export function Landing (props) {
  // image of USCG, set to 'cover'
  return (
    <div className='landingContainer'>
      <div className='landing'>
        <h1>Landing</h1>
        <i className="fa fa-home tooltip" aria-hidden="true"><div className='popover'>Home</div></i>
        <i className="fa fa-sign-in tooltip" aria-hidden="true"><div className='popover'>Sign in</div></i>
        <i className="fa fa-sign-out tooltip" aria-hidden="true"><div className='popover'>Sign out</div></i>

        <i className="fa fa-download tooltip" aria-hidden="true"><div className='popover'>Download</div></i>
        <i className="fa fa-plus tooltip" aria-hidden="true"><div className='popover'>Add</div></i>
        <i className="fa fa-undo tooltip" aria-hidden="true"><div className='popover'>Reset to prior save</div></i>
        <i className="fa fa-floppy-o tooltip" aria-hidden="true"><div className='popover'>Save</div></i>

      </div>
      <LandingFooter/>
    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default connect(mapStateToProps)(Landing);