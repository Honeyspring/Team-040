import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'; 
import africa from '../icons/africa.ico'; 
import './Welcome.css'
const Welcome =()=> {
  
    return(

       <div className=" covr mt0 br3 ba dark-gray b--black-10  w-100 w-50-m w-100-l  shadow-5 ">
          
       <Header/>
       <div className="main center mw vote br3  mv6 w-100 w-50-m   shadow-5  ">
      <div className="text">E-VOTING</div>
        </div>
        <div className="center  mv4 w-100 w-100-m w-100-l mw6   flex flex-column">
          < i className="ta mv1 f4 b bg-color"><img src={africa} alt="africa"/>Your vote is your voice,use that power!!</i>
     <Link to="/SignIn" className="ta mv4  center w-50 bd link ph3 h3 f4 fw6 pv3 bg-transparent input-reset ba b-black bg-color shadow-5  grow pointer  dib" > VOTE NOW </Link>
     </div>
     <Footer/>
     </div>
    
       
  
      );
    }
export default Welcome;