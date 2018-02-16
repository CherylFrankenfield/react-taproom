import React from 'react';
import AdminControl from './AdminControl';
import KegList from './KegList';

class PageControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleNewKegSubmission = this.handleNewKegSubmission.bind(this);
  }

  handleNewKegSubmission(){
    let newKegAdded = this.state.KegAdded;
    this.setState({KegAdded: newKegAdded});
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
