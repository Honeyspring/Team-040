import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../icons/logo.ico';


const Header = () => (
        // <!--Top bar --->
        // TODO:tobar to contain menu nd hamburger icons on all other pages after signned in
        <div>
        <div className="topbar flex ">
          <div className="flex-column  w-25-l">
        <Link to="/"><img className=' ph4 dim logo'src={logo} alt='logo'/></Link>

            </div>


         </div>

        </div>
);

export default Header;
