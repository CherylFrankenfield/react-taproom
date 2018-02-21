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
      masterTapList: [
        { brewery: 'Fort George',
          beer: 'Three Wise Men',
          abv: 13,
          location: 'Astoria, OR',
          price: 7,
          description: 'boozy, yet light-bodied stout'
        },
        { brewery: 'Breakside Brewery',
          beer: 'Back to The Future IPA',
          abv: 7,
          location: 'Portland, OR',
          price: 6,
          description: 'Epic local hops with this IPA'
        }
      ]
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
