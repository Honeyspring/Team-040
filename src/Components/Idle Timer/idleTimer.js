import React ,{useRef,useState} from 'react';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';




Modal.setAppElement('evoting-app')

const idleTimerContainer=()=>{
  const [isLoggedIn,setIsLoggedIn] =useState(true) // default state is user is logged in
  const [modalIsOpen,setModalIsOpen] =useState(false) // default state is modal is closed
  const sessionTimeoutRef=useRef(null) // default session time out is null
  const idleTimerRef=useRef(null);
  const timeout= 3*100000;

 const logOut =()=>{
    setModalIsOpen(false);
    setIsLoggedIn(false);
    console.log("user has logged out")
    clearTimeout( sessionTimeoutRef.current )
  
    window.location ="/signIn"; // redirect to signin



 }
 const stayActive =()=>{
  setModalIsOpen(false);
  clearTimeout( sessionTimeoutRef.current )
  console.log('user is active')
}

// 5sec before timeout
const onIdle =()=>{

  console.log("user is idle");
  setModalIsOpen(true);
 sessionTimeoutRef.current = setTimeout(logOut, 300000) // trigger logout function after 5 sec of the modal being open with still no activity


}

    return(
      <div>
        {
isLoggedIn ? <p> hallo u</p> :<p>hallo guest</p> 
        }
        <Modal isOpen={modalIsOpen} style={{
        
          content:{
            color:'#fff',
            borderColor:' rgb(63, 150, 117)'
          }
        }}>
          <h5 className="tc f3 fw6 ph0 mh0 bg-color ">You have been idle for a while</h5>
          <p className="tc  fw6 ph0 mh0  dark-gray">You will be logged Out soon</p>
          <div className="flex justify-space-around" >
          <button className="tc mv4 btn  center w-25 b link ph3 h3 f4 fw6 pv3 bg-transparent input-reset bd shadow-5 grow pointer  dib" onClick={stayActive}>Keep Me Signed In</button>
          <button className="tc  mv4 logout  center w-25 b  ph3 h3 f4 fw6 pv3 bg-transparent input-reset b--red  shadow-5 grow pointer red dib"onClick={logOut}>Log Me Out</button>
           </div>
        </Modal>
<IdleTimer ref={idleTimerRef} timeout= {timeout} onIdle={onIdle}></IdleTimer>
  </div>
    )

}

export default idleTimerContainer;
