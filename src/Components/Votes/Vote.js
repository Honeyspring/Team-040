import React, {Component} from 'react';
import Header from "../Header/mainHeader";
import Footer from "../Footer/Footer";
// import  "./Vote.css";

class Vote extends Component{
  constructor(){
    super();
    this.state={
        serialNum:[],
        contestantsName:[],
        parties:[]

    }

    this.modal = React.createRef();
    this.choiceDistrict=this.choiceDistrict.bind(this);
  }


// When the user clicks the button, open the modal
open=()=> {
  this.modal.current.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close=()=> {
  this.modal.current.style.display = "none";

}

// ToDo:to be repeated for each subCategories
choiceDistrict=()=>{
  this.setState({serialNum:1},()=>{
      // TODO:Get ALL contestants in this category and update state
      this.open();
      console.log(this.state.userSelection);
  })

  return(this.state.userSelection);
}

  // eslint-disable-next-line class-methods-use-this
  render(){
    return(
      <div>
      <div className=" covr mt2 w-100 w-100-m w-100-l   ">
    <Header />
    <div className="flex    container w-100 w-100 w-100-l">
      <h6 className="w-100 tc f3 f5-ns mt0 dark-gray center">CAST YOUR VOTES!!!</h6>
      <article className="w-100 w-100-l  center flex " >

          <article className="  ba  bg-color  mw  b--black-10 mv4 w-100 w-100-l  shadow-5 center flex flex-column" onClick={this.choiceDistrict}>
          <p>WARD/DISTRICT ELECTION </p>
          <input type="button"
              className="tc mv4 btn center w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
            />

            </article>
            <article className="  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column" >
            <p>LOCAL GOVERNMENT ELECTION </p>
            <input type="button"
              className="tc mv4 btn center w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
            />
            </article>
            <article className="  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column" >
            <p>STATE CONSTITUENCY ELECTION </p>
            <input type="button"
              className="tc mv4 btn center w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
            />
            </article>

            <article className="  ba  bg-color  mw  b--black-10 mv4 w-100 w-100-l  shadow-5 center flex flex-column">
            <p>HOUSE OF REPRESENTATIVE ELECTION </p>
            <input type="button"
              className="tc mv4 btn center w-100 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
            />
            </article>
            <article className="  ba  bg-color  mw  b--black-10 mv4 w-100 w-100-l  shadow-5 center flex flex-column" >
            <p>SENETORIAL ELECTION </p>
            <input type="button"
              className="tc mv4 btn center w-100 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
            />
            </article>
            <article className="  ba  bg-color  mw  b--black-10 mv4 w-100 w-100-l  shadow-5 center flex flex-column" ></article>
            <p>GOVERNORSHIP ELECTION </p>
            <input type="button"
              className="tc mv4 btn center w-100 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
            />
            </article>

      </div>

      </div>
      <Footer/>
      </div>
    );
  }
}
export default Vote;
