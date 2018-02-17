import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  const kegStyles = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  return(
    <div style={kegStyles}>
      <div>
        <h4>{props.brewery}: {props.beer}</h4>
        <h6>{props.description}</h6>
        <h6>{props.location}</h6>
        <h6>{props.abv}</h6>
        <h6>{props.price}</h6>
      </div>
    </div>
  );
}

Keg.propTypes = {
  brewery: PropTypes.string,
  beer: PropTypes.string,
  abv: PropTypes.number,
  location: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string
};

export default Keg;
