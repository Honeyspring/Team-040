import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import MainHeader from '../Header/mainHeader';
import Footer from "../Footer/Footer";
import one from "../../assets/icons/shadowUnity.jpg";
import two from "../../assets/icons/email_32.png";
import { TOKEN } from '../../constants/APIConfig';


class Start extends Component{
  constructor(){
    super();
    this.state = {};
  }


  // eslint-disable-next-line class-methods-use-this
  render(){
    return (
      <div>
        <div className=" mt2  w-100 w-100-m w-100-l  ">
          {TOKEN.test(document.cookie) ? <MainHeader /> : <Header location="/how_it_works" />}
         
          <div className="flex  container w-100 w-100 w-100-l">
            <h6 className="w-100 tc f3 f5-ns mt0  dark-gray center">Take The short tour </h6>
            <article className=" br3 ba  bg-color  mw  b--black-10 mv4 w-100 w-50-m w-50-l  shadow-5 center flex flex-column">
              <Carousel>
                {/* TODO:images and video to be replaced on site completion */}
                <div>
                  <img src={one} alt="image one" />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={two} alt="image two" />
                  <p className="legend">Legend 2</p>
                </div>
              </Carousel>
            </article>
            <article className=" br3 ba  bg-color  mw  b--black-10 mv4 w-100 w-50-m w-50-l  shadow-5 center flex flex-column">
              <video controls className=" h6 w-100 w-100-m w-100-l" id="video">
                <source src="https://www.youtube.com/watch?v=eNHJjGkTLy4" type="video/mp4" />
              </video>
            </article>
            <div className="center  mv4 w-100 w-100-m w-100-l mw6  mw flex flex-column">
              <Link
                to="/"
                className="tc mv4 btn fixed center w-50 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
              >
                {' '}
                SKIP{' '}
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Start;
