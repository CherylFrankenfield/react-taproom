import React from 'react';
import Hero from './Hero';
import FeaturesList from './FeaturesList';
import Quote from './Quote';

function Home() {
  return(
    <div>
      <style jsx global> {`
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          background-color: #d3d9d5;
        }

        html {
         box-sizing: border-box;
        }

        *, *:before, *:after {
         box-sizing: inherit;
        }
            `}
      </style>
      <Hero />
      <FeaturesList />
      <Quote />
    </div>
  );
}

export default Home;
