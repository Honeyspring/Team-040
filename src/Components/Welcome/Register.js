import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'; 
import Footer from '../Footer/Footer';

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            confirmPassword:"",
            vin:""
        }
        this.onhandleInputChange =this.onhandleInputChange.bind(this);
        this.onRegister =this.onRegister.bind(this);
    }
    onhandleInputChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
        
    }
  /*Todo:once authenticated submit button lead to index 
  check for unique email,VIN and confirm passwords,empty data*/
  
    onRegister=(req,res)=>{
            window.location = '/'   
}
    render(){

        return(
          <div className=" covr  br3 ba  b--black-10  w-100 w-100-m w-100-l  shadow-5 ">
           <Header/>    
        <article className="sign  center br3 ba  b--black-10 mv4 w-100 w-50-m w-50-l mw6  shadow-5  ">
        <main className="pa4 ">  
        <div className="measure centre">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f1 fw6 ph0 mh0 center white">   Register</legend>
        <div className="mt3 ">
   
            <input className="pa2 f4 fw6 mv3 input-reset h3  hover-bg hover-black w-100" type="text" onChange={this.handleInputChange}  name="vin"  id="vin" required="required" placeholder="Voter's Identity Number"/>
        </div>
        <div className="mv3 ">
   
            <input className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100" type="email" onChange={this.handleInputChange}  name="email"  id="email-address" required="required" placeholder="Your Email"/>
        </div>
        <div className="mv3 ">
        
            <input className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100" type="password"  onChange={this.handleInputChange} name="voterPassword"  id="password" required="required" placeholder="Your Password"/>
        </div>
        <div className="mv3 ">
        
        <input className="pa2 f3 fw6 mv3 input-reset h3  hover-bg hover-black w-100" type="password"  onChange={this.handleInputChange} name="confirmPassword"  id="confirmPassword" required="required" placeholder="Confirm Password"/>
    </div>
        </fieldset>
        

        <input className="ta bg  mv4 w-100 b link ph3 h3 f3 fw6 pv3  input-reset bd b-black shadow-5  grow pointer  dib" onClick={this.submitRegister}type="submit" value="REGISTER"/>
      
        <div className="lh-copy mt3">
        <p className=" flex">
        <i className="f4 white pa2 flex-column w-75">
        Have an Acccount?
        </i>
        <Link to="/SignIn" className="f3 pa1 fw6 link dim blac flex-column w-25 " >Login</Link>
        </p>
       
       
        </div>
            </div>
            </main>
           
     </article> 
     <Footer/>   
     </div>
      );
    }
   
}
export default Register;