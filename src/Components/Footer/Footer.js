import React from 'react';
import './Footer.css';
import linkedin from '../../assets/icons/linkedin.ico';
import facebook from '../../assets/icons/facebook.ico';
import github from '../../assets/icons/github.ico';


const Footer = () => (
  <footer className="footer" id="footer">
    <a className=" dim" target="blank" href="https://www.facebook.com/groups/249164319589395/">
      <img className="icons" src={facebook} alt="facebook" />
    </a>

    <a className=" dim" target="blank" href="https://github.com/BuildForSDG/Team-040">
      <img className="icons" src={github} alt="github" />
    </a>

    <a className=" dim" target="blank" href="https:/linkedin.com">
      <img className="icons" src={linkedin} alt="linkedin" />
    </a>

    <p className=" link dim  pa3 spring">&copy; {new Date().getFullYear()} TEAM-040 #BuildForSDDG</p>
  </footer>
);

export default Footer;
