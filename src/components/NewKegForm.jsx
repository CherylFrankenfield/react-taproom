import React from 'react';
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let _brewery = null;
  let _beer = null;
  let _abv = null;
  let _location = null;
  let _price = null;
  let _description = null;

  function handleNewKegSubmission(event){
    event.preventDefault();
    props.onNewKegSubmission({brewery: _brewery.value, beer: _beer.value, abv: _abv.value, location: _location.value, price: _price.value, description: _description.value});
    _brewery.value = '';
    _beer.value = '';
    _abv.value = '';
    _location.value = '';
    _price.value = '';
    _description.value = '';
  }

  const KegFormButton = {
    width: '10%'
  };

  return(
    <div>
      <form onSubmit={handleNewKegSubmission}>
        <h4>Add new keg:</h4>
        <label>Brewery Name: </label>
        <input
          type='text'
          id='brewery'
          ref={(input) => {_brewery = input;}}/>
        <label>Beer Name: </label>
        <input
          type='text'
          id='beer'
          ref={(input) => {_beer = input;}}/>
        <label>ABV: </label>
        <input
          type='text'
          id='abv'
          ref={(input) => {_abv = input;}}/>
        <label>Location: </label>
        <input
          type='text'
          id='location'
          ref={(input) => {_location = input;}}/>
        <label>Price Pint: </label>
        <input
          type='text'
          id='price'
          ref={(input) => {_price = input;}}/>
        <label>Description: </label>
        <textarea
          type='text'
          id='description'
          ref={(input) => {_description = input;}}/>
        <Button style={KegFormButton} type='submit' waves='light'>Add<Icon left>local_drink</Icon></Button>
      </form>
      <style jsx>
        {`
          form {
            display: flex;
            flex-direction: column;
            margin: 20px;
          }
          input {
            width: 40%;
          }
          textarea {
            width: 40%;
          }
          label {
            font-size: 20px;
            margin-top: 20px;
          }
          `}
      </style>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegSubmission: PropTypes.func
};

export default NewKegForm;
