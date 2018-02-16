import React from 'react';
import taps from '../assets/images/taps.jpeg';

function Hero() {
  const tapsStyles = {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundSize: 'cover'
  };
  const heroStyles = {
    width: '100vw'
  };

  return(
    <div style={tapsStyles}>
      <img style={heroStyles} src={taps}/>
      <h1 className="heroHeader">Ye Olde Taproom</h1>
      <style jsx> {`
          .heroHeader {
            color: white;
            text-align: center;
            position: absolute;
            font-size: 6rem;
            top: 30%;
            left: 5%;
            z-index: 1;
          }
            `}
      </style>
    </div>
  );
}

export default Hero;
