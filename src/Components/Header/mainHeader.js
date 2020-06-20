import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.ico';
import menu from '../../assets/icons/menu.ico';


const Header = () => (
  <div className="w-100 h3">
    <div className="fl w-20 pa2 ">
        <Link to="/"className="v-mid mid-gray link dim    tc tc tl-ns mb2 mb0-ns" title="Home">
          <img className=' ph4 dim logo'src={logo} alt='logo'/>
        </Link>
      </div>
      <div className="fl w-65 pa2  main   absolute  mt4   dtc-ns v-mid">
        <Link className="link menu   dark-gray tc tr-ns tl-ns f3 f5-ns  pv1 mr0 " to="/home" title="Home">Home</Link>
          <Link className="link menu   dark-gray tc  tl-ns f3 f5-ns  pv1 mr0 " to="/contestants" title="Contestants">Contestants</Link>
          <Link className="link menu   dark-gray tc  tl-ns f3 f5-ns  pv1 mr0 " to="/vote" title="Vote">Vote</Link>
          <Link className="link menu   dark-gray tc  tl-ns f3 f5-ns  pv1 mr0 " to="/results" title="Results">Results</Link>
          <Link className="link menu   dark-gray tc  tl-ns f3 f5-ns  pv1 mr0 " to="/about" title="About">About</Link>
        <Link className="link  menu  dark-gray tc  tl-ns f3 f5-ns  pv1 mr2 " to="/contact" title="Contact">Contact</Link>
      </div>

      <div className="hide-child">
        <Link to="/" className="w-15  mt3 hmb fr tr v-mid  p0-ns link dim dark-gray">
          <img className=' hmb  dim 'src={menu} alt='menu'/>
        </Link>

        <div className="child hmbMenu shadow-5">
          <div className="  dn-l   ">
          <Link className="link   dark-gray   tl-ns  f5-ns  pv1 mr0 mr4-ns" to="/home" title="Home">Home</Link>
          <Link className="link   dark-gray   tl-ns  f5-ns  pv1 mr0 mr4-ns" to="/contestants" title="Contestants">Contestants</Link>
          <Link className="link   dark-gray   tl-ns  f5-ns  pv1 mr0 mr4-ns" to="/vote" title="Vote">Vote</Link>
          <Link className="link   dark-gray   tl-ns  f5-ns  pv1 mr0 mr4-ns" to="/contestants" title="Results">Results</Link>
          <Link className="link   dark-gray   tl-ns  f5-ns  pv1 mr0 mr4-ns" to="/about" title="About">About</Link>
          <Link className="link menu  dark-gray    tl-ns  f5-ns  pv1 mr0" to="/contact" title="Contact">Contact</Link>
        </div>  

        <Link className="link   dark-gray   tl-ns  f5-ns  pv1 mr0 mr4-ns" to="/profile" title="profile">Profile</Link>
        <Link className="link   dark-gray  tl-ns  f5-ns  pv1 mr0 mr1-ns" to="/how_it_works" title="how it works">How It Works</Link>
        <Link className="link   dark-gray  tl-ns  f5-ns  pv1 mr0 mr1-ns" to="/" title="logOut" onClick={() => {document.cookie="token= ";}}>Log Out</Link>
      </div>
    </div>
  </div>  
);

export default Header;
