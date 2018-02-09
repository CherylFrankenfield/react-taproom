import React from 'react';
import PropTypes from 'prop-types';

function Feature(props) {
  return(
    <div>
      <p className="icon">{props.image}</p>
      <h4>{props.header}</h4>
      <p>{props.text}</p>
      <style jsx> {`
            .icon {
              font-size: 2rem;
              color: white;
            }
            `}
      </style>
    </div>
  );
}

Feature.propTypes = {
  image: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string
};

export default Feature;
