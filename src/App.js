import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';

class App extends React.Component {
  render() {
    return (
    	<Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/sign-in" />
          </Route>
          <Route path='/home' component={Home}/>
	        <Route path='/sign-in' component={SignIn}/>
          <Route path='/sign-up' component={SignUp}/>
	        <Route path='/forgot-password' component={ForgotPassword}/>
        </Switch>
      </Router>
    )
  }
}

export default App