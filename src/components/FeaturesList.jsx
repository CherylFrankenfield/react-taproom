import React from 'react';
import Feature from './Feature';
import FaBeer from 'react-icons/lib/fa/beer';
import FaFortAwesome from 'react-icons/lib/fa/fort-awesome';
import FaGift from 'react-icons/lib/fa/gift';

const featureArray = [
  {
    image: <FaFortAwesome/>,
    header: 'About Us',
    text: 'Our taproom opened up in 2014 and has been serving local, Pacific Northwest brews ever since. We started small, as a group of friends home brewing in Tom"s garage. Our most popular beers are the Stormsurge Stout and the collaboration beer, Mountain Molly IPA, with West Coast Brewing.'
  },
  {
    image: <FaBeer/>,
    header: 'We try to stay local.',
    text: 'Most of the beers on tap are from the upper, left coast. From time to time, though, we have special releases from our friends in Colorado and bottles hail from all over the U.S.'
  },
  {
    image: <FaGift/>,
    header: 'Join us for Happy Hour!',
    text: 'Every day from 4:30 to 6:30 is happy hour, plus Fridays 9 - 11 p.m. $1 off pints and usually we have a rotating tap that is only $4.50.'
  }
];

function FeaturesList() {
  const featureStyles = {
    backgroundColor: '#A9E5BB',
    display: 'flex',
    padding: '20px',
    width: '100vw'
  };

  return(
    <div style={featureStyles}>
      {featureArray.map((features, i) =>
        <div>
          <Feature
            image={features.image}
            header={features.header}
            text={features.text}
            key={i}/>
        </div>
      )}
    </div>
  );
}

export default FeaturesList;
