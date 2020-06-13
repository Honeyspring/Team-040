import React from 'react';
import './Footer.css';
import facebook from '../../assets/icons/facebook.ico';
import github from '../../assets/icons/github.ico';


const Footer = () => (
  <footer className="footer" id="footer">
    <a className=" dim" href="https://www.facebook.com/groups/249164319589395/">
      <img className="mw2" src={facebook} alt="facebook" />
    </a>

    <a className=" dim" href="https://github.com/BuildForSDG/Team-040">
      <img className="mw2" src={github} alt="github" />
    </a>

    <p className=" link dim  pa3 dark-gray ">&copy; {new Date().getFullYear()} TEAM-040 #BuildForSDDG</p>
  </footer>
);

export default Footer;
