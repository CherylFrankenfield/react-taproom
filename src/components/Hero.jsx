import React from 'react';
import taps from '../assets/images/taps.jpeg';

function Hero() {
  const tapsStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundSize: 'cover',
    width: '100%'
  };

  return(
    <div style={tapsStyles}>
      <img src={taps}/>
      <h1 className="heroHeader">Ye Olde Taproom</h1>
      <style jsx> {`
          .heroHeader {
            color: white;
            text-align: center;
            position: absolute;
            font-size: 3rem;
            top: 50%;
            left: 50%;
            z-index: 1;
          }
            `}
      </style>
    </div>
  );
}

export default Hero;
