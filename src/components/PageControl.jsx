import React from 'react';
import AdminControl from './AdminControl';

class PageControl extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <div>
        PageControl works!
        <AdminControl />
      </div>
    );
  }

}

export default PageControl;
