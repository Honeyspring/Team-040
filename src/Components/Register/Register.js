/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { TOKEN } from '../../constants/APIConfig';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      vin: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /* Todo:once authenticated submit button lead to index
  check for unique email,VIN and confirm passwords,empty data */

  async submitRegister(e) {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    const even = e.target;
    // eslint-disable-next-line no-unused-expressions
    password === confirmPassword ? await this.props.registerUser(this.state, even) : toast.warn('⚠️ Passwords are not the same.');
  }

  render() {
    if (this.props.error.message) {
      toast.error(`❌ ${this.props.error.message}`);
      delete this.props.error.message;
    }
    if (this.props.success.message) {
      toast.success(`✔️ ${this.props.success.message}`, { onClose: () => this.props.history.push('/signIn') });
      delete this.props.success.message;
    }
    if (TOKEN.test(document.cookie)) {
      return <Redirect to="/home" />;
    }
    return (
      <div className=" covr  br3 ba  b--black-10  w-100 w-100-m w-100-l  shadow-5 ">
        <Header location='/signIn' />

        <article className="sign  center br3 ba  b--black-10 mv4 w-100 w-50-m w-50-l mw6  shadow-5  ">
          <main className="pa4 ">
            <div className="measure centre">
              <form onSubmit={this.submitRegister}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0 center white"> Register</legend>
                  <div className="mt3 ">
                    <input
                      className="pa2 f4 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="text"
                      onChange={this.handleInputChange}
                      name="vin"
                      id="vin"
                      required
                      placeholder="Voter's Identity Number"
                    />
                  </div>
                  <div className="mv3 ">
                    <input
                      className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="email"
                      onChange={this.handleInputChange}
                      name="email"
                      pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-z]{2,4})$"
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
                  <div className="mv3 ">
                    <input
                      className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="password"
                      onChange={this.handleInputChange}
                      name="confirmPassword"
                      id="confirmPassword"
                      required
                      placeholder="Confirm Password"
                    />
                  </div>
                </fieldset>

                <input
                  className="tc bg  mv4 w-100 b link ph3 h3 f3 fw6 pv3  input-reset bd b-black shadow-5  grow pointer  dib"
                  type="submit"
                  value={this.props.loading ? 'Loading...' : 'REGISTER'}
                  disabled={this.props.loading}
                />
              </form>

              <div className="lh-copy mt3">
                <p className=" flex">
                  <i className="f4 white pa2 flex-column w-75">Have an Acccount?</i>
                  <Link to="/SignIn" className="f3 pa1 fw6 link dim blac flex-column w-25 ">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </main>
        </article>

        <Footer />
      </div>
    );
  }
}

Register.propTypes = {
  history: PropTypes.object.isRequired, // Object to concins push props to navigate on application like this: this.history.push('path')
  location: PropTypes.object.isRequired, // object contains location on URL: pathname, search, key, hash
  match: PropTypes.object.isRequired, // object contains all the information on URL: path, url, params...
  error: PropTypes.object.isRequired, // props come to state, contains props message: error.message. Notice: Visit containers/registerService/registerService.js for more details.
  success: PropTypes.object.isRequired, // props come to state, contains props message: success.message. Notice: Visit containers/registerService/registerService.js for more details.
  loading: PropTypes.bool.isRequired, // props come to state, indiquely if app is loading. Notice: Visit containers/registerService/registerService.js for more details.
  registerUser: PropTypes.func.isRequired // dispatch function come to redux, he takes data (to register user) and even in parameters
};

export default Register;
