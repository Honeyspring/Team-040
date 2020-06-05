import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';

import Welcome from './Components/Welcome/Welcom';
import RegisterService from './containers/registerService/registerService';
import LoginService from './containers/loginService/loginService';

/**
 * ROUTER APP COMPONENT
 * @func App
 * @prop store
 */

const App = ({ store }) => {
  toast.configure({position: 'top-right', hideProgressBar: true}); // Init the toast notification in Application globaly
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
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
