import React, {Component} from 'react';
import Header from "../Header/mainHeader";
import Footer from "../Footer/Footer";


class Update extends Component{
 constructor(props){
    super(props);
   this.state={

   }
   this.fileUpload= this.fileUpload.bind(this);
   this.update= this.update.bind(this);
    }

fileUpload=()=>{
        // upload pic
    }

update=()=>{
    // get user's info and update
}

  render(){

    return (
    <div>
      <Header />
     <article className="sign  center br3 ba  b--black-10 mv4 w-100 w-50-m w-50-l mw6  shadow-5  ">
          <main className="pa4 ">
            <div className="measure centre">
              <form >
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f3 fw6 ph0 mh0 center white">Profile  update </legend>
                  <div className="mt3 ">
                    <input
                      className="pa2 f4 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="file"

                      name="picture"
                      id="picture"
                      required

                    />
                    <input
                      className="tc mv4  btn center w-50 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset ba b-white  shadow-5  grow pointer  dib"
                      type="button"
                      onClick={this.fileUpload}
                      name="fileUpload"
                      Value="UPLOAD"
                    />
                  </div>
                  <div className="mv3 ">
                    <input
                      className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="email"
                      onChange={this.handleInputChange}
                      name="email"
                      pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}$"
                      id="email-address"
                      required
                      placeholder="johnny@gmail.com"// email gotten from db
                    />

                  </div>
                  <div className="mv3 ">
                    <input
                      className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="password"
                      onChange={this.handleInputChange}
                      name="password"
                      id="password"
                      required
                      placeholder="Your Old Password"
                    />
                  </div>
                  <div className="mv3 ">
                    <input
                      className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="password"
                      onChange={this.handleInputChange}
                      name="password"
                      id="password"
                      required
                      placeholder="New Password"
                    />
                  </div>
                  <div className="mv3 ">
                    <input
                      className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="password"
                      onChange={this.handleInputChange}
                      name="confirmPassword"
                      id="ConfirmPassword"
                      required
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="mv3 ">
                    <input
                      className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="text"
                      onChange={this.handleInputChange}
                      name="dob"
                      id="dob"
                      required
                      placeholder=" 13/09/1983" // date of birth gotten from db
                    />
                  </div>

                  <div className="mv3 ">
                    <input
                      className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="text"
                      onChange={this.handleInputChange}
                      name="occupation"
                      id="occupation"
                      required
                      placeholder="Teacher" // occupation gotten from db
                    />
                  </div>
                  <div className="mv3 ">
                    <input
                      className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100"
                      type="text"
                      onChange={this.handleInputChange}
                      name="address"
                      id="address"
                      required
                      placeholder="7,Cresecent Avenue,Babura,jigawa,Nigeria" // adress gotten from db
                    />
                  </div>
                </fieldset>

                <input
                  className="tc bg  mv4 w-100 b link ph3 h3 f3 fw6 pv3  input-reset bd b-black shadow-5  grow pointer  dib"
                  type="submit"
                  value='UPDATE'

                />
              </form>


            </div>
          </main>
        </article>

      <Footer />
    </div>
  );
  }
}


export default Update;
