import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props){
  return (
    <div>
      <h2>Sorry, the page {props.location.pathname} does not exist.</h2>
      <h3>Click to return to <Link to="/">home</Link> page.</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
