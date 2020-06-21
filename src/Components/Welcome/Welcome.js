/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Welcome.css';
import naira from '../../assets/icons/naira.ico';
import protect from '../../assets/icons/protect.ico';
import relaxed from '../../assets/icons/relaxed.ico';
import palmScan from '../../assets/icons/palmScan.ico';
import africa from '../../assets/icons/africa.ico';


const Welcom = () => (
  <div className=" covr  br3 ba  b--black-10  w-100 w-100-m w-100-l  shadow-5 ">
    <Header location='/' />

    <div className="flex  wlcm  mt2 container w-100 w-100 w-100-l">
      <article className=" br3 ba  bg-color  mw  b--black-10 mv4 w-50 w-50-l  shadow-5 center flex flex-column">
        <legend className="f4  ph2 fw6 mh0">
          <img src={protect} alt="secured" />
          SECURITY
        </legend>
        <p className="b bg-color">
          Both Electoral officials and voters no longer have to worry about damages
           or loss of properties or lives due
          to voilence that take place on voting ground.
        </p>
      </article>
      <article className=" br3 ba  bg-color mw b--black-10 mv4 w-50 w-50-l  shadow-5 center flex flex-column">
        <legend className="f4 fw6  ph2 mh0">
          <img src={naira} alt="low cost" />
          LOW COST
        </legend>
        <p className="b bg-color">
          Money wasted on physical voting material as well as
          transporting electoral officials is reduced and money is
          saved
        </p>
      </article>

      <article className=" br3 ba  bg-color mw   b--black-10 mv4 w-50 w-50-l  shadow-5 center flex flex-column">
        <legend className="f4  fw6   mh0">
          <img src={palmScan} alt="palm scan" />
          AUTHENTICATED VOTES
        </legend>
        <p className=" b bg-color">
          Voting is done simultaneously and updated live therefore
          curbing unaccepted votes, double voting and rigging of
          results{' '}
        </p>
      </article>
      <article className=" br3 ba  bg-color  mw b--black-10 mv4 w-50  w-50-l  shadow-5 center flex flex-column">
        <legend className="f4 fw6  ph2 mh0">
          <img src={relaxed} alt="comfort" />
          COMFORT AND SPEED
        </legend>
        <p className="b  bg-color">
          At the comfort of your home yourvotes are casted, No long queues, Speedy votes, ease.
        </p>
      </article>
      <div className="center  mv4 w-100 w-100-m w-100-l mw6  mw flex flex-column">
        <i className="tc mv1 f4 b bg-color">
          <img src={africa} alt="africa" />
          Your vote is your voice, use that power!!
        </i>
        <Link
          to="/signIn"
          className="tc mv4  btn center w-50 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black bg-color shadow-5  grow pointer  dib"
        >
          {' '}
          VOTE NOW{' '}
        </Link>
      </div>
    </div>

    <Footer />
  </div>
);
export default Welcom;
