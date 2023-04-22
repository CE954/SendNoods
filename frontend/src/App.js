import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';

function App() {
  return (
    <Switch> 
      <Route exact path='/'> 
        <h1>Hello from "/"</h1>
      </Route>
      <Route exact path='/login'>
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default App;
