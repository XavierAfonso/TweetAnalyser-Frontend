import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import { AuthContext } from './Utils/AuthProvider';
import HomePage from './Pages/Home';
import AnalysePage from './Pages/Analyse';

import './css/general.css';


const ProtectedRoute = ({ component: Component, ...rest }) => {

  return <Route {...rest} render={(params) => {
      
      return <AuthContext>

         {( {user}) => {

          return user 
          ? <Component {...params} />
          : <Redirect to="/login" />
         }}

      </AuthContext>
    }} />
}


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {


    return (
      <Switch>
        <ProtectedRoute path="/" exact component={HomePage} />
        <ProtectedRoute path="/analyse" exact component={AnalysePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/*" component={LoginPage} />
      </Switch>
    );
  }
}

export default App;
