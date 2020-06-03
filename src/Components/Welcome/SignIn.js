import React,{Component} from 'react';
 import { Link } from 'react-router-dom';
 import Header from '../Header/Header'; 
import Footer from '../Footer/Footer'; 
 import './Welcom.css';

class SignIn extends Component {
    constructor(props){
        super( props);
          this.state={
           vin:'',
           voterPassword:''
            
          }
this.handleInputChange =this.handleInputChange.bind(this);
 this.submitLogin =this.submitLogin.bind(this);
 }
 
 handleInputChange(event) {
 this.setState({[event.target.name]: event.target.value})
 }
//Todo:once authenticated submit button lead to index
submitLogin(event){
 event.preventDefault();
 window.location = '/'

 }
   
      
    render(){
       
    return(
      <div className=" covr  br3 ba  b--black-10  w-100 w-100-m w-100-l  shadow-5 ">
           <Header/>    
        <article className="sign  center br3 ba  b--black-10 mv4 w-100 w-50-m w-50-l m6  shadow-5  ">
        <main className="pa4 ">  
        <div className="measure centre">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f1 fw6 ph0 mh0 center white">   Sign In</legend>
        <div className="mt3 ">
   
            <input className="pa2 f4 fw6 mv3 input-reset h3  hover-bg hover-black w-100" type="text" onChange={this.handleInputChange}  name="vin"  id="email-address" required="required" placeholder="Voter's Identity Number"/>
        </div>
        <div className="mv3 ">
        
            <input className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100" type="password"  onChange={this.handleInputChange} name="voterPassword"  id="password" required="required" placeholder="Your Password"/>
        </div>
        
        </fieldset>
        

        <input className="ta bg  mv4 w-100 b link ph3 h3 f3 fw6 pv3  input-reset bd b-black shadow-5  grow pointer  dib" onClick={this.submitLogin}type="submit" value="LOGIN"/>
      
        <div className="lh-copy mt3">
        <p className=" flex">
        <i className="f6 b white pa2 flex-column w-75">
        Don't have an Acccount?
        </i>
        <Link to="/Register" className="f3 pa1 fw6 link dim blac flex-column w-25 " >Register</Link>
        </p>
       
        <a href="#0" className="fw6 f4 b w-100 link dim  ta "><i>Forgot password?</i></a>
        </div>
            </div>
            </main>
           
     </article> 
     <Footer/>   
     </div>
      );
    }
}
export default SignIn;