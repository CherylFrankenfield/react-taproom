import React from 'react';

function Quote() {
  const quoteStyles = {
    textAlign: 'center',
    height: '20vh',
    margin: '20px',
    padding: '20px'
  };
  return(
    <div style={quoteStyles}>
      <h4>"If the beer be small, then let the mug be large."</h4>
      <h5>--Sir Arthur Conan Doyle</h5>
    </div>
  );
}

export default Quote;
