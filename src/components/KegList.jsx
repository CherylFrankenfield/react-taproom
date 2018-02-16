import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return(
    <div>
      <h2>Today's taplist: </h2>
      {props.tapList.map((keg) =>
        <Keg brewery={keg.brewery}
          beer={keg.beer}
          abv={keg.abv}
          location={keg.location}
          price={keg.price}
          description={keg.description}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  tapList: PropTypes.array
};

export default KegList;
