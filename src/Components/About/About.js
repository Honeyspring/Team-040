import React from 'react';
import Header from "../Header/mainHeader";
import Footer from "../Footer/Footer";
import './About.css';
import facebook from '../../assets/icons/facebook.ico';
import github from '../../assets/icons/github.ico';
import whatsapp from '../../assets/icons/whatsapp.ico';
import stanley from '../../assets/team/stanley.png';
import peter from '../../assets/team/peter.png';
import oyin from '../../assets/team/oyinda.png';
import sam from '../../assets/team/sam.jpeg';



const About =()=>{
    return (

<div className=" covr  br3 ba  b--black-10  w-100 w-100-m w-100-l  shadow-5 ">
<Header/>

        <div className=" w-100 ">
        <h6 className="tc pr4 f2 bg-color flex flex-column  ">About </h6>
    <p className=" f3">  E-voting was a project carried out by a team of five developers connected through a Developer&apos;s circle innovative program
    intended to connect developers in order to solve problems that affects our society through technology.
    As a team amongst this various systems of the society we chose  Project 16 ,which was to help reduce one source of corruption and bribery in our community
    and with that we developed an online voting system in order to solve the problem in our voting system as a society with the intent to
    acheive  less corruption in voting, increase security of life and property as voters don&apos;t leave their comfort zone ,
    create opportunity for Everyone to vote ,Since its easy to cast votes
    ,manages or reduce the cost of carrying out election as the app eliminates electoral tools like ballot paper,box,vest,transportation,etc
    ,Eliminates unaccepted vote as it is not done manually so ballot paper can not be torn,stained or thumb print ink appearing between two parties choices
    ,Eliminates/reduces rigging as vote are cast simultaneously and calculations as done online and all can monitor votes  without tampering
    and also Prevents case of double voting as users can only vote once.
    With the conclusion of the program we have been able to create this web app working together.
    </p>
            </div>
            <h6 className="tc pr4 f2 b mt2 bg-color flex flex-column center ">Meet Our Team</h6>
<div className="  mt2 container w-100 w-100 w-100-l flex jt">

<article className="fl ma4  br3 ba  mw b--black-10  w-100 w-25-l w-50-m shadow-5  flex flex-column">
    <div className=" f4 fw6  ph2 mh0">
      <img className="w-100 ma2"
      src={stanley}
      style={{maxHeight:'300px'}}
       alt="contestant" />

    </div>
          <div className="mb0">
                <legend className="tc center f4  ph2 fw6 mh0">AGU  STANLEY CHIBUIKE</legend>
                <a className="tc dim link  lh-copy measure  f6 black-70" href="mail:tochibuke.stanley50@gmail.com">chibuke.stanley50@gmail.com</a>
                <div className="w-100 flex  ">
                <a className=" dim center" href="https://www.facebook.com/chibuke.stanley.5">
                <img className="mw2" src={facebook} alt="facebook"  />
                </a>
                <a className=" dim center" href="https://github.com/Stanyke">
                <img className="mw2" src={github} alt="github" />
                </a>
                <a className=" dim center" href="https://wa.me/+2348102760569">
                <img className="mw2" src={whatsapp} alt="whatsapp" />
                </a>
                </div> {/* socials */}
              </div>

  </article>

  <article className="fl br3 ba ma4 mw b--black-10  w-100 w-25-l w-50-m shadow-5  flex flex-column">
    <div className=" f4 fw6  ph2 mh0">
      <img className="w-100 ma2"
      src={oyin}
      style={{maxHeight:'300px'}}
       alt="contestant" />

    </div>
          <div >
                <legend className="tc f4 center ph2 fw6 mh0">OGUNSOLA OYINDAMOLA</legend>
                <a className=" tc dim link lh-copy measure  f6 black-70" href="mailto:ogunsola.irene@gmail.com">ogunsola.irene@gmail.com</a>
                <div className="w-100 flex ">
                <a className=" dim center" href="https://www.facebook.com/ogunsola.oyindamola">
                <img className="mw2" src={facebook} alt="facebook" />
                </a>
                <a className=" dim center" href="https://github.com/Honeyspring">
                <img className="mw2" src={github} alt="github" />
                </a>
                <a className=" dim center" href="https://wa.me/+2348092916689">
                <img className="mw2" src={whatsapp} alt="whatsapp" />
                </a>
                </div> {/* socials */}
              </div>

  </article>

  <article className="mv4 fl br3 ba  mw b--black-10  w-100 w-25-l w-50-m shadow-5  flex flex-column">
    <div className=" f4 fw6  ph2 mh0">
      <img className="w-100  ma2"
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJAAWQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgIDBAcBAAj/xAA+EAACAQMCAwQGCAQFBQAAAAABAgMABBEFEgYhMRNBUWEUIjJxgZEHIyRSYqGx0RVCksFUY6KywhZEctLx/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQAAQIF/8QAIREAAgIBBQEAAwAAAAAAAAAAAAECEQMEEhMhMSIyQUL/2gAMAwEAAhEDEQA/AOlrHVixVYq1ci1CilYqkyKilnIVVGSScACvNUvrXSNOnv759kEK5PiT3AeJJ5VxXifiXU+J5nEzGCxB9S1Q+rjxb7x9/LwrMpqISGNz8H/VfpC4b052iW4kvJF6i1TcP6jgfI0Fb6W9JVsNpWoBfEbM/rXOexG7AXnWO7hwOYoXK7DPTqjtmj8fcN6tKsK3bWszcgl2mzJ8A3s/nTO0XhX5YdXRuXTwp74D4+u9DeOz1F5LnTM4Kn1ngHiviB935eBIp2Bljo7M8dUvHW5THPCk0DrJFIoZHU5DA9CKpkStgzCyVDZWpkqOyoQJrWiIZqhRWmIVCzm30rag09/a6QjfVQp28o8XbIXPuGf6qT7ewNwyqp2jvPgKJcTzel8Waq5yftBjHuT1P+NW6dEd4B+VJze6R0sS2wBt9o8cKDsSSwoHfQlwRjmK6RJHCY8MvMDrStfWkZ3ug9+TVNUai7EmaDnjFe2lo8kgSMes3Ie+id3CqNULZuzI2nBzRIAMqo6v9FF7I+lXGlTNu9FfdCc/yHqPcG/3U5ypXOfopSRb55Oe1gVaumTLTCEpemBlqO2tDLUdtWUa0FaIxzqqMZobxhc3FjwzfXdpI8csKB90eN2ARkDPfjNU3RpK3RyzVrZ4uJ9Tib2vTJW6dzOSPyNGIDaxLtkljRgOe5qD3F295qNzd3TkyswLkKASQoHPHu7qEayyy2Mt1/D5VhRthlllZN7YyAAM8z54HnSi7l0dF3GCsd5ZbbbiOWJ/cQaAXsQc/VkYYmlOx0+7WYGK2mhOAwKEsuCM8/hRjUlvrGyhlkztccmrMrujUH1bM+pWYjBO4c6Ccg+FdT8azrHdapdtFE0jnazn19oCgZJzVcVtFEolKzrGZCizbgysfKixjSAZJ7mdr+i+2xaC4Lc2cKFHd3mnyUVyXh7XLvSuCpZdMaJr2K5iijaVC6/WOF5gYz1Ndblz0br30ePgpNUzM1RxU261GtGDXGKq1eD0jR72LZv3wOAvjyq1DV6VTVmk6dnGeF1VtRcA7gxPNh1GfOmnU9JS7RgcjcOfZnr8DQLiG2XQeKp4oj9XIBMg8A2eXwIIo/pN6Z0BAGT49aSfTo6ae6KkgZb8Px2ELsh7Hcckk5Y/GgfGID6bBECSoyedMfEGo2mnoDqEs6o5wscCFmc/DupW4q1HTmt4ZIwyLtyRI3MVjty6CqlHsUrC1eCQtGcN97HMVpFiir1B8sdKiJIlEU0Mu9ZGxgjB/wDlWyy4Bx1oruwC20OfAdn2trawlSUl1OJjy7kVn5+Xq11aSue/RS5kSRT0jBYe88v3roL01DwQyfkUNUam1RrRg0IavU1kVqvRqhBG+lWxINhqqD2SYJP9y/8AL5il7RNSMGfIV0jjC3juuF9RSUZ2wl18mXmD8647bOVyh5MRils0e7HtNL5oZLzVfSVDoYk2nCu4yQfwjqT7qSeIYmkWYXDK0pYGN2hYNj4jlTBa2mkWO2SWGUD74lcjPwORQfWrjTJTIY71yQfUUSk/rzrCoLJOuxftT9YiSABiQMjvohNFjb3knFC44cTiWORyAQQCeVHrO2mv7u1tIADNM4RQTgZJ7/KiUL7mdS+i6y9H0KW4Yc5pMA+QH7k02uap0uxj0vTLaxhOVhQLux7R7z8Tk1Y5o6VIVk7ZBqjXzGo5qyi1TXlzfW9lH2lzKEH50Nl1PqlsPW+8aD30xku3DsZGWMMAfOixxN+g5TX6J8Z8RSixSxt4dou0JkZ+qpy5Y7if7UiT2+8b15MKY+N5Pt1i2PVnhcKfNSDj5N+VL7OMdaT1HU6OhplcLKPSIIwVnO046E0v381iXJiHOimr28d3B9Ym5l6MDgilG8shG3Itgd26gxirDTlJKqN6ywwoJpWO0dAOrHyrbwzqMx122uuStHIGRe4Y50ukE4Lc6vtrk2uXX2scqMhaSs73w1x1YazH2V4yWd8kvYuhPqM+Mja3gRzAPu7qZmORkdD31+adEVrq2vmJJDvGvxGTn4Zpw0rXtX0uCOS2u2JV8NFL60cg8/A+Y5+NNxxuUbQpKVOjsLVGgvDfEtrrkQBQ290B60THIP8A4nvo7tNYaadMtOxchcO1vcxYaOUBXX7rdKGTT7+KblFOV7MJ4Y51q4WYvbMjJ9WrF1/Wg+hM13r97KzHPbEA08LGrjy0kl4bFzCuZtLmWYAc8oBh/wDQxPwpWl5xpIoyjjIIro9vKs13dIQGh5Rvu5g58f0+NJJ006Rc3GkuheGE77VvGI9B716fAeNIazH/AEjoaLJ24MXruUx+qTjPjQS7DytgYpg11Y5VDRfynBFQ0vSY7hTJI2AoyRmkU6H2rFaWEqAKw3jdnGfOma+sWWQuwxu9keVR0PRF1HVVeaMm1tsSS8va+6vxP5A0bH9OhfKtqsJaHpZs9Pt4nUh0i7eYfibnj5Y+VF7KwFzZzxDqpyPd3UctLTbHe9qu6aWMyN5eArPw8VTsi/R/VI8a68VSo5MpW7B+jxPzKcpk64/Oj3pd1/nfNv8A2rHdW4s9ZY4ARznHjRXMHg3yFTamTc0T0U+iaHcSOQNkRJJ7uVCuCEAtbi8ccy7NzNbNYkFpwpdsDguwQc6hw+gteGMgYL99QoKaNgq3acxOxZs/lUdTt2vYGjGPTbX2C3V18Pj+uDUtPKqkRBwcCrNSYjVI1RgrPDvjY4GWHd8azKKkqZqMnF2jmbhfS3MgwGYggjp7/OtEThX2x5299FeLNN3K2r2SnZ/3UQHOM/e/f5+NYNKga52pChkc9AK5OTDKEqOxizKcbKLq2kvriNYULSN6qqB1px0/S7bSNOQOykI2+Rx/PJj+3dWnSNGisIe1m9aZ+Rcdw+6Py51i4ouS80NlHlQT6wHhmn9Ng2fT9ENVn3vavC6xbtLO+vJDzkjPL+1DtIX7PHnaNveT1orej0fh6Rdoywx76o0+IR2wRhlRj500JmjiOLfBbzYHLvxih+9fvf6qN6ivbaTjqVPf30s7vM/nUIMXEvC2r3uhWtjZxIXEoaXMoAArT/01qMejC1ihXtM9O0HT35pijtNUUrI12hcKqsM+q2C5z7PU5T5GoGz1btGkW7QMe7tCQM7O7b+Fuf4s+9TmkMcaBMGgX6RxqYYwV/zBVet6BqtzNZTWsSFoT631gFH2tdTKY9MBJIBJPQbFBxhRz3Bj8fgPorfVAy77hCm4ZXfzIwcjOzl3e/yqc0iuNAf+BX6zbxAmyRcSpuGD3VTYcLy6anZ2NnFHGTlvXHPy6/l3Uft7fUo7SOF50eRGXc4cjeuMY9k47ufPPlnl4LXU2Yb7wKN3PZjmMr+HlyD8u7I5nunLJl7EgU+i6hJdRs0aiJBnG8daEXnC2rXGsekG3TsfHtRn5U8JFdBbQvcKOzX7QoTPanb3Hu586wPp972jlJhsMxdQZmyMnOchR07l6edXzSK40BNW4e1G7gggjiXaGG87wOXf76kvD9+pkCwrtPs/WCjEGm38ckJa8BjjnLmMsx3Ls2825c85PTGTnuFfR6dqH2b7UIWSHZIRI0gJG4cgQM9QcnnkCpzyJxRBJ0bVBGqrCMFwW+sHTnnvqn/pa6/w6f1D96LfwnUREiemHIhRGxKwLMCmTzBxyU+Odxz1qX8N1T/HJ/XJ+9TnmTiif//Z"
      style={{maxHeight:'300px'}}
       alt="contestant" />

    </div>
          <div >
                <legend className="tc center f4  ph2 fw6 mh0"> JORDAN KAGMENI</legend>
                <a className="tc dim link lh-copy measure  f6 black-70" href="mailto:kagmeni77@gmail.com">kagmeni77@gmail.com</a>
                <div className="w-100 flex ">
                <a className=" dim center" href="https://www.facebook.com/jordinho.kagmeni.71">
                <img className="mw2" src={facebook} alt="facebook" />
                </a>
                <a className=" dim center" href="https://github.com/el-torador">
                <img className="mw2" src={github} alt="github" />
                </a>
                <a className=" dim center" href="https://wa.me/+23797040511">
                <img className="mw2" src={whatsapp} alt="whatsapp" />
                </a>
                </div> {/* socials */}
              </div>

  </article>

  <div className="w-100 flex jt">
  <article className="fl ma4 br3 ba  mw b--black-10  w-100 w-25-l w-50-m shadow-5  flex flex-column">
  <div className="f4  ph2 fw6 mh0">
    <img
    className="w-100 ma2"
      alt="contestant"
      style={{maxHeight:'300px'}}
      src={sam}
              />
    </div>


      <legend className="tc f4 center ph2 fw6 mh0"> SAMUEL ANIEFIOK</legend>
      <a className=" tc dim link lh-copy measure  f6 black-70" href="mailto:samuel4u2c@gmail.com">samuel4u2c@gmail.com</a>
      <div  className="w-100 flex">
      <a className=" dim center" href="https://www.facebook.com/samuel.aniefiok">
      <img className="mw2 " src={facebook} alt="facebook" />
      </a>
      <a className=" dim center" href="https://github.com/Cool-sami12">
      <img className="mw2 " src={github} alt="github" />
      </a>
      <a className=" dim center" href="https://wa.me/+2348066912700">
      <img className="mw2 " src={whatsapp} alt="whatsapp" />
      </a>
     </div> {/* socials */}

  </article>
  <article className="fl br3 ba ma4 mw b--black-10  w-100 w-25-l w-50-m shadow-5  flex flex-column">
    <div className=" f4 fw6  ph2 mh0">
      <img className="w-100 ma2"
      src={peter}
      style={{maxHeight:'300px'}}
       alt="contestant" />

    </div>
          <div >
                <legend className="tc f4 center ph2 fw6 mh0"> OGBA PETER CHIMAOBI</legend>
                <a className="tc dim link  lh-copy measure  f6 black-70" href="mailto:peterbozz1996@gmail.com">peterbozz1996@gmail.com</a>
                <div className="w-100 flex  ">
                <a className=" dim center" href="https://www.facebook.com/pkingzee">
                <img className="mw2" src={facebook} alt="facebook" />
                </a>
                <a className=" dim center" href="https://github.com/peterchims">
                <img className="mw2" src={github} alt="github" />
                </a>
                <a className=" dim center" href="https://wa.me/+2348188346382">
                <img className="mw2" src={whatsapp} alt="whatsapp" />
                </a>
                </div> {/* socials */}
              </div>

  </article>
  </div>
  </div>


<Footer />
</div>
);
  }

export default About;
