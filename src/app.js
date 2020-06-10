import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';
import Welcome from './Components/Welcome/Welcome';
import SignIn from './Components/Welcome/SignIn';
import Register from './Components/Welcome/Register';
import Start from './Components/Users/Start';
import Home from './Components/Users/Home';
import Contestants from './Components/Users/Contestants';
import RegisterService from './containers/registerService/registerService';
import LoginService from './containers/loginService/loginService';

/**
 * ROUTER APP COMPONENT
 * @func App
 * @prop store
 */
// all privates routes redirects back to welcome page
const App = ({ store }) => {
  toast.configure({position: 'top-right', hideProgressBar: true}); // Init the toast notification in Application globaly
  return (
    <Provider store={store}>
      <Router>
        <Switch>
{/* the root route is home but would be a private route and anyone not signed in is redirected to welcome route */}
          <Route exact path="/" component={Home} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/how_it_works" component={Start} />
          <Route path="/contestants" component={Contestants} />
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
