import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import NavBar from './components/NavBar';
import SignupFormPage from './components/SignupFormPage';
import AccountPage from './components/AccountPage';

function App() {
  return (
    <>
    <NavBar/>
    <Switch> 
      <Route exact path='/'> 
        {/* Home page */}
      </Route>
      <Route exact path='/login'>
        <LoginFormPage />
      </Route>
      <Route exact path='/signup'>
        <SignupFormPage />
      </Route>
      <Route exact path='/account'>
        <AccountPage />
      </Route>
    </Switch>
    </>
  );
}

export default App;
