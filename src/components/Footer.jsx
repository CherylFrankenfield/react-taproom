import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  const footer = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    padding: '5vw 1vw',
    marginRight: 25,
    backgroundColor: 'black',
    color: 'white'
  };

  return(
    <div style={footer}>
      <div>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Blog</li>
          <li>Photos</li>
        </ul>
      </div>
      <div>
        Newsletter Signup goes here.
      </div>
      <div>
        <p><Link to='/admin'>Admin Login</Link></p>
      </div>
    </div>
  );
}

export default Footer;
