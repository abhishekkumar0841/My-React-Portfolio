import React, { useRef, useState } from 'react'
import './Contact.scss'
import contactUsImg from '../../images/contact-us.png'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import emailjs from "@emailjs/browser";
import Button from '../Button/Button';

const Contact = () => {

  const [contacted, setContacted] = useState(false);

  const [textInput, setTextInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  function changeHandler(e){
    const {name, value} = e.target ;
    setTextInput((pervState) => ({
      ...pervState, 
      [name] : value
    }))
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // e.target.reset();

    setTextInput((prevState) => {
        return {
          ...prevState,
          user_name: "",
          user_email: "",
          message: "",
        };
      });

    emailjs
      .sendForm(
        "service_20aw9ud",
        "template_pl7jtiw",
        form.current,
        "B6igm4iZXrWNDwuyq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setContacted(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef()

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src={contactUsImg} alt="" />
      </div>
      <div className="right">
        <h1>Contact Form</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            <p>Your Full Name:</p>
            <input type="text" name='user_name' placeholder='Enter Your Name' required value={textInput.user_name} onChange={changeHandler}/>
          </label>
          <label><p>Your Email Id:</p>
            <input type="email" name='user_email' placeholder='Enter Your Email' required value={textInput.user_email} onChange={changeHandler}/>
          </label>
          <label><p>Write Your Message Below:</p>
            <textarea name="message" cols="30" rows="8" placeholder='Write Your Message Here...' value={textInput.message} onChange={changeHandler}></textarea>
          </label>
          {/* <button>Submit</button> */}
          <Button text="Submit" />
        </form>
        {
          contacted && <p>** Thanks for contacting me , I replay ASAP **</p>
        }
      </div>
      <div className="upArrow">
        <a href="#intro"><BsFillArrowUpCircleFill/></a>
      </div>
    </div>
  )
}

export default Contact
