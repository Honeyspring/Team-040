import React, {Component} from 'react';
import Header from "../Header/mainHeader";
import Footer from "../Footer/Footer";
// import  "./Vote.css";

class Vote extends Component{
  constructor(){
    super();


    this.choiceDistrict=this.choiceDistrict.bind(this);
  }



// ToDo:to be repeated for each subCategories
choiceDistrict=()=>{

      // TODO:Get ALL contestants in this category and redirect user to route:ballot
  window.location ="/ballot";


}

  // eslint-disable-next-line class-methods-use-this
  render(){
    return(
      <div>
      <div className=" covr mt2 w-100 w-100-m w-100-l   ">
    <Header />
    <div className="flex container w-100 w-100 w-100-l">
      <h6 className="w-100 tc f3 f5-ns mt0 dark-gray center">CAST YOUR VOTES!!!</h6>
      <article className="w-100 w-100-l  center " >
      {/* todo: ONCE USER votes for a category the card is hidden and only other categories r left */}
          <article className="  ba    mw8  b--black-10 mv4 w-100 w-100-l  shadow-5 center " >
          <p  className="fl bg-color  tc w-70">WARD/DISTRICT ELECTION </p>
          <input type="button"
              className=" tc mv4 btn w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
               value="VOTE" onClick={this.choiceDistrict} />

            </article>
            <article className="  ba    mw8  b--black-10 mv4 w-100 w-100-l  shadow-5 center " >
            <p className="fl bg-color tc w-70" >LOCAL GOVERNMENT ELECTION </p>
            <input type="button"
              className=" tc mv4 btn w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
              value="VOTE" onClick={this.choiceLocalGov}/>
            </article>
            <article className="  ba    mw8  b--black-10 mv4 w-100 w-100-l  shadow-5 center " >
            <p className="fl bg-color tc w-70">STATE CONSTITUENCY ELECTION </p>
            <input type="button"
              className=" tc mv4 btn w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
              value="VOTE" onClick={this.choiceState}/>
            </article>

            <article className="  ba    mw8  b--black-10 mv4 w-100 w-100-l  shadow-5 center ">
            <p className="fl bg-color tc w-70">HOUSE OF REPRESENTATIVE ELECTION </p>
            <input type="button"
              className=" tc mv4 btn w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
              value="VOTE" onClick={this.choiceHouseOfRep}/>
            </article>
            <article className="  ba    mw8  b--black-10 mv4 w-100 w-100-l  shadow-5 center " >
            <p className="fl bg-color tc w-70">SENETORIAL ELECTION </p>
            <input type="button"
              className="tc mv4 btn w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
              value="VOTE" onClick={this.choiceSenetorial}/>
            </article>
            </article>

      </div>

      </div>
      <Footer/>
      </div>
    );
  }
}
export default Vote;
