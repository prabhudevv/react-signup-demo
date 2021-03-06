import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';
import SignUp from "./components/assets/SignUp";
import LogIn from "./components/assets/LogIn";
import Home from "./components/assets/Home";
import Logout from "./components/assets/Logout";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/logout" component={Logout}></Route>
        </Switch>
        <NotificationContainer />
      </Router>
    </div>
  );
}

export default App;