import React from 'react';
import propTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';

/**
 * ROUTER APP COMPONENT
 * @func App
 * @prop store
 */

const App = ({ store }) => {
  toast.configure(); // Init the toast notification in Application globaly
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={() => <h1>HOME PAGE</h1>} />
        </Switch>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: propTypes.object.isRequired
};

export default App;
