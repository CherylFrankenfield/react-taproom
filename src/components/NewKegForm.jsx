import React from 'react';
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';

function NewKegForm(props){
  const KegFormButton = {
    width: '10%'
  };
  return(
    <div>
      <form onClick={props.handleNewKegSubmission}>
        <h4>Add new keg:</h4>
        <label>Brewery Name: </label>
        <input
          type='text'
          id='brewery'/>
        <label>Beer Name: </label>
        <input
          type='text'
          id='beer-name'/>
        <label>ABV: </label>
        <input
          type='text'
          id='abv'/>
        <label>Location: </label>
        <input
          type='text'
          id='location'/>
        <label>Price Pint: </label>
        <input
          type='text'
          id='price'/>
        <label>Description: </label>
        <input
          type='text'
          id='description'/>
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
  handleNewKegSubmission: PropTypes.func
};

export default NewKegForm;
