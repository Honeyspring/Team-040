import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';
/* import Welcome from './Components/Welcome/Welcome';
first welcome page,switch between  them with this*/
import Welcome from './Components/Welcome/Welcom';
import SignIn from './Components/Welcome/SignIn';
import Register from './Components/Welcome/Register';

/**
 * ROUTER APP COMPONENT
 * @func App
 * @prop store
 */


const App =({store})=>{
  toast.configure(); // Init the toast notification in Application globaly
  return(
    <Provider store={store}>
  <Router >
  <Switch>

    <Route path="/signIn" component={SignIn} />
    <Route path="/Register" component={Register} />
    <Route path="/Welcome" component={Welcome} />
    
    </Switch>
  </Router>
  </Provider>
  );
  }

  App.propTypes = {
    store: propTypes.object.isRequired
  };

export default App;






