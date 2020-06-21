import React from 'react';
import {Link} from "react-router-dom";
import Header from "../Header/mainHeader";
import Footer from "../Footer/Footer";
import avatar from '../../assets/icons/avatar.ico';


const Profile=()=>{

    return (
    <div>
      <Header />

      <article className="sign  center br3 ba  b--black-10 mv4 w-100 w-50-m w-50-l mw6  shadow-5  ">
          <main className="pa4 ">
            <div className="measure centre">

                <fieldset id="profile" className="ba b--transparent ph0 mh0">
                  <legend className="f2 fw6 ph0 mh0 center white">Profile   </legend>
                  <div className="mt3  center w-100 shadow-5 br-100 ba    bg-white">
                  <img src={avatar} className=" ma4   mv4 w-75  "alt="profile picture"/>

                  </div>
                  <div className="mv3 ">
                    <p>FULL NAME: <i className="white ma4">Jhonny Rae  Lai</i></p>
                  </div>
                  <div className="mv3 ">
                   <p>EMAIL: <i className="white ma4">jonny@gmail.com</i></p>
                  </div>
                  <div className="mv3 ">
                   <p>VIN :<i className="white ma4">91F5BF24526869975</i></p>
                  </div>
                  <div className="mv3 ">
                    <p>OCCUPATION:<i className="white ma4">Teacher</i></p>
                  </div>
                  <div className="mv3 ">
                    <p>SEX:<i className="white ma4">Male</i></p>
                  </div>
                  <div className="mv3 ">
                   <p>DATE OF BIRTH :<i className="white ma4"> 13/09/1983</i></p>
                  </div>
                  <div className="mv3 ">
                   <p>AGE:<i className="white ma4">37</i></p>
                  </div>
                  <div className="mv3 ">
                   <p>ADDRESS :<i className="white ma4">7,Cresecent Avenue,Babura,jigawa,Nigeria</i></p>
                  </div>
                </fieldset>

                <Link to="/profile_update" className="tc mv4  btn center w-50 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset ba b-white  shadow-5  grow pointer  dib">
                     Edit
                    </Link>

            </div>
          </main>
        </article>

      <Footer />
    </div>
  );
  }



export default Profile;
