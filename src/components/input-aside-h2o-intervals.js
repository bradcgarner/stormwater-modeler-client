import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import * as actionsDisplay from '../actions/display';
import * as actionsProject from '../actions/project';

// interior to inputAside. Input of precipitation overall variables and settings.
// route app/input/h2o/storms
export function InputAsideH2oIntervals (props) {

  const handleSubmitButton = values => {
    props.dispatch(actionsProject.createOrEditProject({...values, id: props.project.id}, 'intervals', props.user.authToken))
  }
  
  return (
    <div className='asideContainer'>

      <form className='asideInputForm'
        onSubmit={props.handleSubmit((values) => handleSubmitButton(values))} >
        <div className='formFieldWrapper'>

          <div className='labelFieldPair'>
            <label
              className='inputLabel'
              htmlFor={'intervalMins'}>minutes per cycle
            </label>
            <Field
              name='intervalMins'
              id='intervalMins'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>

          <div className='labelFieldPair'>
            <label
              className='inputLabel'
              htmlFor={'eventGapThreshold'}>new event starts after __ cycles without precipitation
            </label>
            <Field
              name='eventGapThreshold'
              id='eventGapThreshold'
              component='input'
              type='text'
              className='inputField'
              required />
          </div>
        </div>

          <div className='buttonContainer buttonColumnBottom'>
            <div className='buttonContainer buttonRowBottom'>

              <button className='iconWrap' aria-label='save'
                type="submit" disabled={props.pristine || props.submitting}>
                <i className="fa fa-floppy-o tooltip" aria-hidden="true">
                  <div className='popover'>Save</div>
                </i>            
              </button>
              <button className='iconWrap' aria-label='reset form'
                type="button" disabled={props.pristine || props.submitting}
                onClick={props.reset}>
                <i className="fa fa-undo tooltip" aria-hidden="true">
                  <div className='popover'>Reset form</div>
                </i>
              </button>
            </div>
          </div>

        </form>

    </div>
  )
}

const mapStateToProps = state => ({
  display: state.display,
  user: state.user,
  project: state.project,
  initialValues: state.project.intervals,
  enableReinitialize: true,
});

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'inputAsideH2oIntervals'})
)(InputAsideH2oIntervals);