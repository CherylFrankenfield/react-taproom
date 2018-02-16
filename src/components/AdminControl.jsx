import React from 'react';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

function AdminControl(props) {
  return(
    <div>
      <NewKegForm onNewKegSubmission={props.onNewKegSubmission}/>
    </div>
  );
}

AdminControl.propTypes = {
  onNewKegSubmission: PropTypes.func
};

export default AdminControl;
