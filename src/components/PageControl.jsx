import React from 'react';
import AdminControl from './AdminControl';
import KegList from './KegList';
import Home from './Home';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

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
          <Route path='/admin' render={()=><AdminControl onNewKegSubmission={this.handleAddingNewKegToList}/>}/>
          <Route path='/draftlist' render={()=><KegList newTapList={this.state.masterTapList}/>}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default PageControl;
