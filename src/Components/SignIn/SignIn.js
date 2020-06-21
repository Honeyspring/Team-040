/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { toast }  from 'react-toastify';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../Welcome/Welcome.css';
import { TOKEN } from '../../constants/APIConfig';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value.trim() });
  }

  // Todo:once authenticated submit button lead to index
  async submitLogin(event) {
    event.preventDefault();
    const redirect = this.props.history;
    await this.props.loginUser(this.state, redirect);
  }

  render() {
    if (this.props.error.message) {
      toast.error(`❌ ${this.props.error.message}`);
      delete this.props.error.message;
    }
    if (TOKEN.test(document.cookie)) {
      return <Redirect to="/home" />;
    }
      return (
        <div className=" covr  br3 ba  b--black-10  w-100 w-100-m w-100-l  shadow-5 ">
          <Header location="/register" />

          <article className="sign mw  center br3 ba  b--black-10 mv4 w-100 w-50-m w-50-l m6  shadow-5  ">
            <main className="pa4 ">
              <div className="measure centre">
                <form onSubmit={this.submitLogin}>
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0 center white"> Sign In</legend>
                    <div className="mt3 ">
                      <input
                        className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                        type="email"
                        onChange={this.handleInputChange}
                        name="email"
                        pattern="^[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,6}$"
                        id="email-address"
                        required
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mv3 ">
                      <input
                        className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                        type="password"
                        onChange={this.handleInputChange}
                        name="password"
                        id="password"
                        required
                        placeholder="Your Password"
                      />
                    </div>
                  </fieldset>

                  <input
                    className="tc bg  mv4 w-100 b link ph3 h3 f3 fw6 pv3  input-reset bd b-black shadow-5  grow pointer  dib"
                    type="submit"
                    value={this.props.loading ? 'Loading...' : 'LOGIN'}
                    disabled={this.props.loading}
                  />
                </form>
                <div className="lh-copy mt3">
                  <p className=" flex">
                    <i className="f6 b white pa2 flex-column w-75">Don&lsquo;t have an Acccount?</i>
                    <Link to="/register" className="f3 pa1 fw6 link dim blac flex-column w-25 ">
                      Register
                    </Link>
                  </p>

                  <a href="#0" className="fw6 f4 b w-100 link dim  ta ">
                    <i>Forgot password?</i>
                  </a>
                </div>
              </div>
            </main>
          </article>

          <Footer />
        </div>
      );

  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired, // Object to contains push props to navigate on application like this: this.history.push('path')
  location: PropTypes.object.isRequired, // object contains location on URL: pathname, search, key, hash
  match: PropTypes.object.isRequired, // object contains all the information on URL: path, url, params...
  error: PropTypes.object.isRequired, // props come to state, contains props message: error.message. Notice: Visit containers/loginService/loginService.js for more details.
  loading: PropTypes.bool.isRequired, // props come to state, indicates if app is loading. Notice: Visit containers/loginService/loginService.js for more details.
  loginUser: PropTypes.func.isRequired // dispatch function come to redux,  takes data (to register user) and even in parameters
};

export default SignIn;
