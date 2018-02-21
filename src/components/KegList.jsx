import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return(
    <div>
      <h2>Today's taplist: </h2>
      {props.newTapList.map((keg, index) =>
        <div>
          <Keg
            brewery={keg.brewery}
            beer={keg.beer}
            abv={keg.abv}
            location={keg.location}
            price={keg.price}
            description={keg.description}
            key={index}/>
        </div>
      )}
    </div>
  );
}

KegList.propTypes = {
  newTapList: PropTypes.array
};

export default KegList;
