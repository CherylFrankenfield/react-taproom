import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return(
    <div>
      <style jsx>
        {`
          div {
            background-color: black;
            padding: 10px;
            color: white;
            width: 100vw;
          }
          ul {
            display: flex;
            justify-content: space-around;

          }
          li {
            list-style: none;
          }
          `}
      </style>
      <ul>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/draftlist'>Tap List</Link></li>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
