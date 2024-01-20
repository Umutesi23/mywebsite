import Navbar from '../components/Navbar';
import'./contact.css';
import React ,{useState, useRef}from 'react';
import gmail from './gmail.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import whatsapp from './whatsapp.png';
import emailjs from '@emailjs/browser';

//background with links and input
const ContentWrapper= ()=>{

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ytabnwl', 'template_84bd1jp', form.current, 'qKsMBntGoH7Np5rL_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 

   return (
      <div className='cWrapper'>
        <form ref ={form} className='inputC' onSubmit={sendEmail}>
          <p className='inputPrompt'>We Would Love To Hear From You! Hit Us Up!</p>
          <input className='mydetails' type='text' placeholder='EnterName' name='from_name'></input>
          <input className='mydetails' type='email' placeholder='Enter email' name='from_email' ></input>
         <textarea className='tarea' placeholder='Type Your Message Here' name='message'/>
<button className=' sbtn' type='submit' value='Send'>SUBMIT</button>

        </form>


        <div className='socials'>

          <a href='https://www.instagram.com/umutesi_gloire/' ><img className='linkIcons' src={instagram}  alt='instagram'/></a>
<a><img src={gmail} className='linkIcons ' alt='gmail'/></a>
<a  href='https://www.linkedin.com/in/umutesi-princess-33011b190/'><img src={linkedin}  className='linkIcons ' alt='linkedin'/></a>
<a href='https://wa.link/8prgmu'><img src={whatsapp} className='linkIcons ' alt='whatsapp'/></a>



<h2 className='linkprompt bounceIt'>Link Up!</h2>
        </div>


      </div>
    )
  }

function Contacts() {
  return (
    <div><Navbar/>
    <div className='space'/>
<ContentWrapper/>

</div>

  )
}

export default Contacts;