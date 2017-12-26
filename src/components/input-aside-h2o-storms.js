import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import * as actionsUser from '../actions/user';
import * as actionsProject from '../actions/project';

// interior to inputAside. Input of precipitation overall variables and settings.
// route app/input/h2o/storms
export function InputAsideH2oStorms (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.placeholder())
  }
  
  return (
    <div>
      <h4>aside storms</h4>

      <form className='asideInputForm'
          onSubmit={props.handleSubmit((values) => handleSubmitButton(values))}
        >

          <div>
            <label
              className='inputLabel'
              htmlFor={'cycleMins'}>minutes per cycle
            </label>
            <Field
              name='cycleMins'
              id='cycleMins'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>

          <div>
            <label
              className='inputLabel'
              htmlFor={'eventRestartCycles'}>new event starts after __ cycles without precipitation
            </label>
            <Field
              name='eventRestartCycles'
              id='eventRestartCycles'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>

          <div>
            <button className='submitButton'
              type="submit" disabled={props.pristine || props.submitting}>Save
            </button>
            <button className='clearButton'
              type="button" disabled={props.pristine || props.submitting}
              onClick={props.reset}>Clear Form
            </button>
          </div>

        </form>

    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideH2oStorms'})
)(InputAsideH2oStorms);