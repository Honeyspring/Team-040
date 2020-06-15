import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.ico';


const Header = (props) => (
  // <!--Top bar --->
  // TODO:tobar to contain menu nd hamburger icons on all other pages after signned in
  <nav className="dt  dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10 ">
    <div className="dtc dn-ns w-third"></div>

    <Link to="/" className="dtc  v-mid mid-gray link dim w-third w-25-ns tc tl-ns mb2 mb0-ns" title="Home">
      <img className=" ph4 dim logo" src={logo} alt="logo" />
    </Link>

    <div className="static-ns  main absolute left-0 mt5 mt0-ns  dtc-ns v-mid w-100 w-75-ns h-80 tr">
      <Link
        className="link dim  menu dark-gray tc tl-ns f3 f5-ns main dib-ns pv1 mr0 mr4-ns"
        to="/how_it_works"
        title="How It Works"
      >
        How It Works
      </Link>
      <Link className="link dim menu dark-gray tc tl-ns f3 f5-ns main dib-ns pv1 mr0 mr4-ns" to="/about" title="About">
        About
      </Link>
      <Link className="link dim menu dark-gray tc tl-ns f3 f5-ns main dib-ns pv1 mr0" to="/contact" title="Contact">
        Contact
      </Link>
      {props.location === '/signIn' && (
        <Link className="link dim bd menu bg-color tc tl-ns f3 f5-ns main dib-ns pv1 mr0" to="/signIn" title="Sign IN">
          Sign IN
        </Link>
      )}
      {props.location === '/register' ||
        (props.location === '/' && (
          <Link
            className="link dim bd menu bg-color tc tl-ns f3 f5-ns main dib-ns pv1 mr0"
            to="/register"
            title="Register"
          >
            Register
          </Link>
        ))}
    </div>
    <Link to="/" className="dtc btn fr tr v-mid dn-ns w-third p0-ns link dim dark-gray">
      <span className="db w2 mt1 mb2 bw2 pb2 bt bb b--dark-gray"></span>
      <span className="db w2 mt1 bw2 pb1 bt b--dark-gray"></span>
    </Link>
  </nav>
);
Header.propTypes = {
  location: PropTypes.string.isRequired
};
export default Header;
