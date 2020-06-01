import React from 'react';
import './Footer.css';
import linkedin from '../icons/linkedin.ico';
import facebook from '../icons/facebook.ico';
/*import gmail from '../icons/gmail.ico';
import mobile from '../icons/phone.ico';
import whatsapp from '../icons/whatsapp.ico';*/
import github from '../icons/github.ico';


const Footer = () => {
    
      return (
        <footer className="footer" id="footer">
           
            <a className=' dim' href="https://www.facebook.com/groups/249164319589395/"><img className="icons" src={facebook} alt='facebook'/></a>
            
            <a className=' dim' href="https://github.com/BuildForSDG/Team-040"><img  className="icons" src={github} alt='github'/></a>
            
            <a className=' dim' href="https:/linkedin.com"><img className="icons" src={linkedin} alt='linkedin'/></a>

           <p className=' link dim  pa3 spring'>&copy;  {new Date().getFullYear()}   TEAM-040 #BuildForSDDG</p> 
          
           
      
        </footer>
      );
    
}

export default Footer;
