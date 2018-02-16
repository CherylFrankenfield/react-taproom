import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import AdminControl from './AdminControl';
import Error404 from './Error404';
import PageControl from './PageControl';
import { Switch, Route } from 'react-router-dom';

function App() {
  return(
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/admin' component={AdminControl}/>
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
