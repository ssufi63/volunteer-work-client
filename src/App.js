import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AllRegistrations from './Components/AllRegistrations/AllRegistrations';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Registration from './Components/Registration/Registration';
import RegistrationLists from './Components/RegistrationLists/RegistrationLists';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/registration/:actId">
            <Registration></Registration>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registrations">
            <RegistrationLists></RegistrationLists>
          </Route>
          <Route path="/allRegistrations">
            <AllRegistrations></AllRegistrations>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
