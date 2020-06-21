import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "../Header/mainHeader";
import Footer from "../Footer/Footer";
 import apc from "../../assets/parties/apc.jpg";
 import ann from "../../assets/parties/ann.jpg";
 import accord from "../../assets/parties/accord.jpg";
 import sdp from "../../assets/parties/sdp.jpg";
 import pdp from "../../assets/parties/pdp.jpg";
import "./ballot.css";


class Ballot extends Component{
  constructor(props){
    super(props);
    this.state = {
       vote: ''
    };

    this.ballot = React.createRef();
    this.handleChoice=this.handleChoice.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  // When the user clicks the button, open the modal
  open() {
    this.ballot.current.style.display = "block";
  }

  // When the user clicks on <span> (x) or No, close the modal
  close() {
    this.ballot.current.style.display = "none";
  }

  // ToDo:if user chose yes submit vote
  handleChoice(event){
    this.setState({vote:event.target.value});
    // TODO:submit choice to databse
    this.close(); // redirect back to continue voting in other categories
    this.props.history.push('/vote');
  }


  // eslint-disable-next-line class-methods-use-this
  render(){
    return (
      <div>
        <div className=" covr mt2 w-100 w-100-m w-100-l  ">
          <Header />

          <div className=" w-100 w-100 w-100-l">
            <h6 className="w-100 tc f2 f5-ns mt4 bg-color center">Ballot</h6>
            <article className="circles w-100 w-100-l  center ">
              {/* ToDo:Dispaly all contesting parties according to the category of votes selected */}
              <img
                src={apc}
                className=" br-100 ba  bg-color  ma4 mw  b--black-10 mv4 w-25   shadow-5  "
                onClick={this.open}
              />

              <img
                src={pdp}
                className="br-100  ba  bg-color ma4  mw  b--black-10 mv4 w-25   shadow-5  "
                onClick={this.open}
              />

              <img
                src={apc}
                className=" br-100 ba  bg-color ma4  mw  b--black-10 mv4 w-25   shadow-5  "
                onClick={this.open}
              />

              <img
                src={ann}
                className="br-100  ba  bg-color ma4  mw  b--black-10 mv4 w-25   shadow-5  "
                onClick={this.open}
              />

              <img
                src={accord}
                className="br-100  ba  bg-color ma4  mw  b--black-10 mv4 w-25   shadow-5  "
                onClick={this.open}
              />

              <img
                src={sdp}
                className="br-100  ba  bg-color ma4  mw  b--black-10 mv4 w-25   shadow-5  "
                onClick={this.open}
              />
            </article>
          </div>
          {/* Display constestants profile when one caterogry is clicked */}
          <div className="h6 ballot shadow-5" ref={this.ballot} id="ballot">
            <span className=" close" onClick={this.close}>
              &times;
            </span>

            <div className="ballot-content pa4 flex flex-column w-100 w-100-m w-100-l" ref={this.ballot} id="votes">
              <div className="overflow-auto">
                <p className="tc"> Are You Sure of Your vote?,remember You can not vote twice</p>
                <div className="center  mv4 w-100 w-100-m w-100-l mw6  mw flex ">
                  <input
                    type="button"
                    className="tc mv4 btn center w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
                    value="YES"
                    onClick={this.handleChoice}
                  />
                  <input
                    type="button"
                    className="tc mv4 btn center w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd b-black dark-gray shadow-5  grow pointer  dib"
                    value="NO"
                    onClick={this.close}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    );
  }
}

Ballot.propTypes = {
  history: PropTypes.object.isRequired
};

export default Ballot;
