import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';
/* import Welcome from './Components/Welcome/Welcome';
first welcome page,switch between  them with this */
import Welcome from './Components/Welcome/Welcom';
import SignIn from './Components/Welcome/SignIn';
import Register from './Components/Welcome/Register';
import Start from './Components/Users/Start';
import Home from './Components/Users/Home';
import Contestants from './Components/Users/Contestants';
/**
 * ROUTER APP COMPONENT
 * @func App
 * @prop store
 */
// all privates routes redirects back to welcome page
const App = ({ store }) => {
  toast.configure(); // Init the toast notification in Application globaly
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/how_it_works" component={Start} />
          <Route path="/contestants" component={Contestants} />
        </Switch>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: propTypes.object.isRequired
};

export default App;
