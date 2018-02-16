import React from 'react';

function NewKegForm(){
  return(
    <div>
      <h3>Add new keg:</h3>
      <form>
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
        <button>Add</button>
      </form>
    </div>
  );
}

export default NewKegForm;
