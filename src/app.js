import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';
import ProtectedRoute from './helpers/ProtectedRoute/ProtectedRoute';
import Welcome from './Components/Welcome/Welcome';
import Start from './Components/Start/Start';
import Home from './Components/Home/Home';
import Update from './Components/Profile/Update';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Vote from './Components/Votes/Vote';
import Ballot from './Components/Ballot/Ballot';
import RegisterService from './containers/registerService/registerService';
import LoginService from './containers/loginService/loginService';
import ContestantService from './containers/contestantService/contestantService';


/**
 * ROUTER APP COMPONENT
 * @func App
 * @prop store
 * @description contains all the routes (secure and unsecure) of the app
 * @returns component<Component>
 */
const App = ({ store }) => {
  toast.configure({position: 'top-right', hideProgressBar: true}); // Init the toast notification in Application globaly
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/how_it_works" component={Start} />
          <Route path="/contestants" component={ContestantService} />
          <Route path="/vote" component={Vote} />
          <Route path="/ballot" component={Ballot} />
          <Route path="/profile_update" component={Update} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/signIn" component={LoginService} />
          <Route path="/register" component={RegisterService} />
          <Route component={() => <h1>404 PAGE NOT FOUND</h1>} />
        </Switch>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: propTypes.object.isRequired
};

export default App;
