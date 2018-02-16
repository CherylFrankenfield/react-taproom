import React from 'react';
import AdminControl from './AdminControl';
import KegList from './KegList';

class PageControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taplist: {}
    };
    this.handleNewKegSubmission = this.handleNewKegSubmission.bind(this);
  }

  render(){
    return(
      <div>
        <KegList taplist={this.state}/>
        <AdminControl handleNewKegSubmission={this.handleNewKegSubmission}/>
      </div>
    );
  }

}

export default PageControl;
