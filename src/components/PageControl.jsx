import React from 'react';
import AdminControl from './AdminControl';
import KegList from './KegList';

class PageControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newTapList = this.state.masterTapList.slice();
    newTapList.push(newKeg);
    this.setState({masterTapList: newTapList});
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/admin' component={AdminControl}/>
          <Route path='/draftlist' component={KegList}/>
          <Route component={Error404} />
        </Switch>
        <KegList newTapList={this.state.masterTapList}/>
        <AdminControl onNewKegSubmission={this.handleAddingNewKegToList}/>
      </div>
    );
  }

}

export default PageControl;
