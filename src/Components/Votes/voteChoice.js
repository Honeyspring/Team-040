import React, {Component} from 'react';
import Header from "../Header/mainHeader";
import Footer from "../Footer/Footer";
 import apc from "../../assets/parties/apc.jpg";
 import ann from "../../assets/parties/ann.jpg";
 import accord from "../../assets/parties/accord.jpg";
 import sdp from "../../assets/parties/sdp.jpg";
 import pdp from "../../assets/parties/pdp.jpg";
 
class Ballot extends Component{
  constructor(){
    super();
    this.state={
       vote:""
     
    }

    this.modal = React.createRef();
    this.handleChoice=this.handleChoice.bind(this);

  }

// ToDo:if user chose yes submit vote
handleChoice=(event)=>{ 
  this.setState({vote:event.target.value});
  // TODO:submit choice to databse
  this.close();
}

// When the user clicks the button, open the modal
open=()=> {
  this.modal.current.style.display = "block"; 
}

// When the user clicks on <span> (x) or No, close the modal
close=()=> {
  this.modal.current.style.display = "none";

}

  // eslint-disable-next-line class-methods-use-this
  render(){
    return(
      <div>
      <div className=" covr mt2 w-100 w-100-m w-100-l  ">
    <Header />
    <div className="flex    container w-100 w-100 w-100-l">
      <h6 className="w-100 tc f3 f5-ns mt0 dark-gray center">ballot</h6>
      <article className="w-100 w-100-l  center flex" >
      {/* ToDo:Dispaly all contesting parties according to the category of votes selected */}
      <img src={apc} className=" br-100 ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column"  onClick={this.open()}/>
     
        <img src={pdp} className="br-100  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column" onClick={this.open()}/>
 
      <img src={apc} className=" br-100 ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column"  onClick={this.open()}/>
      
        <img src={ann} className="br-100  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column" onClick={this.open()} />
      
        <img src={accord} className="br-100  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column" onClick={this.open()} />

        <img src={sdp} className="br-100  ba  bg-color  mw  b--black-10 mv4 w-25 w-25-l  shadow-5 center flex flex-column" onClick={this.open()}/>
      
      </article>

      </div>
         {/* Display constestants profile when one caterogry is clicked */}
         <div className="h4 modal shadow-5"ref={this.modal} id="modal" >
         <span className=" close" onClick={this.close}>&times;</span>
         <legend className="f3 fw6 ph0 dark-gray center  mh0" >subcategory name</legend>
          <div className="modal-content pa4 flex flex-column w-100 w-100-m w-100-l "ref={this.modal} id="modal">
            <div className="overflow-auto">
            <div className="center  mv4 w-100 w-100-m w-100-l mw6  mw flex flex-column">
<p> Are You Sure of Your vote?,remember You can not vote twice</p>
<input type="button"
 className="tc mv4 btn center w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
 value="YES" onClick={this.handleChoice}/>
 <input type="button"
 className="tc mv4 btn center w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
 value="NO" onClick={this.close()}/>
</div>
            </div>

            </div>
            </div>

      </div>
      <Footer/>
      </div>
    );
  }
}
export default Ballot;
