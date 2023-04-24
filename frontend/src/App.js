import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginFormPage from './components/LoginFormPage';
import NavBar from './components/NavBar';
import SignupFormPage from './components/SignupFormPage';
import AccountPage from './components/AccountPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar/>
        <Switch> 
          <Route exact path='/'> 
            <HomePage />
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
      <Footer/>
    </>
  );
}

export default App;
