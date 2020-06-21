import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/mainHeader";
import Footer from "../Footer/Footer";
import  "./Home.css";


class Home extends Component{
  constructor(){
    super();
    this.state={
        serialNum:[],
        contestantsName:[],
        parties:[]
    };

    this.modal = React.createRef();
  }


// When the user clicks the button, open the modal
open(){
  this.modal.current.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close(){
  this.modal.current.style.display = "none";

}

// ToDo:to be repeated for each subCategories
choicePresidential(){
  this.setState({serialNum:1}, () => {
      // TODO:Get ALL contestants in this category and update state
      this.open();
      console.log(this.state.userSelection);
  });

  return(this.state.userSelection);
}

  // eslint-disable-next-line class-methods-use-this
  render(){
    return (
      <div>
        <div className=" covr mt2 w-100 w-100-m w-100-l   ">
          <Header />
         
          <div className="flex    container w-100 w-100 w-100-l">
            <h6 className="w-100 tc f3 b f5-ns mt0 bg-color center">Voting Categories</h6>
            <article className="w-100 w-100-l  center flex ">
              <article
                className="  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column"
                onClick={this.choicePresidential}
              >
                <p>WARD/DISTRICT ELECTION </p>
              </article>
              <article className="  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column">
                <p>LOCAL GOVERNMENT ELECTION </p>
              </article>
              <article className="  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column">
                <p>STATE CONSTITUENCY ELECTION </p>
              </article>
            </article>
            <article className="  w-100 w-100-l center flex ">
              <article className="  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column">
                <p>HOUSE OF REPRESENTATIVE ELECTION </p>
              </article>
              <article className="  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column">
                <p>SENETORIAL ELECTION </p>
              </article>
              <article className="  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column">
                <p>GOVERNORSHIP ELECTION </p>
              </article>
            </article>

            {/* Display constestants profile when one caterogry is clicked */}
            <div className=" modal shadow-5" ref={this.modal} id="modal">
              <span className=" close" onClick={this.close}>
                &times;
              </span>
              <legend className="f3 fw6 ph0 dark-gray center  mh0">subcategory name</legend>
              <div className="modal-content pa4 flex flex-column w-100 w-100-m w-100-l " ref={this.modalContent} id="modal">
                <div className="overflow-auto">
                  <table className="f6 w-100 mw8 center" cellSpacing="0">
                    <thead>
                      <tr>
                        <th className="fw6 bb dark-gray b--black-20 tl pb3 pr3 bg-white">S/N</th>
                        <th className="fw6 bb dark-gray b--black-20 tl pb3 pr3 bg-white">CONTESTANTS</th>
                        <th className="fw6 bb dark-gray b--black-20 tl pb3 pr3 bg-white">PARTIES</th>
                      </tr>
                    </thead>
                    <tbody className="lh-copy">
                      <tr>
                        <td className="pv3 pr3 bbdark-gray b--black-20">1</td>
                        <td className="pv3 pr3 bbdark-gray b--black-20">Hassan Johnson</td>
                        <td className="pv3 pr3 bbdark-gray b--black-20">PDP PARTY IMAGE</td>
                      </tr>
                      <tr>
                        <td className="pv3 pr3 bbdark-gray b--black-20">2</td>
                        <td className="pv3 pr3 bbdark-gray b--black-20">Taral Hicks</td>
                        <td className="pv3 pr3 bbdark-gray b--black-20">
                          <img src="" className="bg" alt="nameofparty" />
                        </td>
                      </tr>
                      <tr>
                        <td className="pv3 pr3 bbdark-gray b--black-20">3</td>
                        <td className="pv3 pr3 bbdark-gray b--black-20">Hassan Johnson</td>
                        <td className="pv3 pr3 bbdark-gray b--black-20">PDP PARTY IMAGE</td>
                      </tr>
                      <tr>
                        <td className="pv3 pr3 bbdark-gray b--black-20">2</td>
                        <td className="pv3 pr3 bbdark-gray b--black-20">Taral Hicks</td>
                        <td className="pv3 pr3 bbdark-gray b--black-20">
                          <img src="" className="bg" alt="nameofparty" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="center  mv4 w-100 w-100-m w-100-l mw6  mw flex flex-column">
              <Link
                to="/"
                className="tc mv4 btn center w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
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
export default Home;
