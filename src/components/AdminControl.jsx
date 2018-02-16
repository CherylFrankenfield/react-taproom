import React from 'react';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

function AdminControl(props) {
  return(
    <div>
      <NewKegForm onNewKegSubmission={props.handleNewKegSubmission}/>
    </div>
  );
}

AdminControl.propTypes = {
  handleNewKegSubmission: PropTypes.func
};

export default AdminControl;
