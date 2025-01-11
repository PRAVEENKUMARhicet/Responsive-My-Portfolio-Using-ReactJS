import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { TiTick } from "react-icons/ti";
import { TiCancel } from "react-icons/ti";

function ContactMe() {
    const form = useRef();
    const [isSend,setSend]=useState(false);
    const [isFailed,setFailed]=useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_mlnu7lc', 'template_vjrt8re', form.current, {
                publicKey: 'UZHP8TIVeT2BdKc8H',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSend(!isSend);
                    setTimeout(()=>setSend(false),4000);
                },
                (error) => {
                    setFailed(!isFailed);
                    setTimeout(()=>setFailed(false),4000);
                },
            );
            e.target.reset();
    };
    return (
        <section id="Contact" className="contact--section">
            <div>
          <div className='send' style={{display:isSend?"flex":"none" ,alignItems:"center"}}>
            <TiTick style={{color:"#5CB338",width:"50px",height:"50px"}}/>
            <p style={{display:"block",margin:"auto 10px"}}>Message Sent Successfully!</p>
          </div>
          <div className='failed' style={{display:isFailed?"flex":"none" ,alignItems:"center"}}>
            <TiCancel style={{color:"red",width:"50px",height:"50px",marginLeft:"10px"}}/>
            <p style={{display:"block",margin:"auto 10px"}}>Message Not Sent Try Again</p>
          </div>
        </div>
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2 className="skills--section--heading">Contact Me</h2>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">Name
                        <input type="text" name="from_name"
                            className="contact--input"
                            id="first-name"
                            required />
                    </label>
                    <label htmlFor="email" className="contact--label">Email
                        <input type="email" name="user_email"
                            className="contact--input"
                            id="email"
                            required />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">phone-number</span>
                        <input
                            type="number"
                            className="contact--input"
                            name="phone_number"
                            id="phone-number"
                            required
                        />
                    </label>
                    <label htmlFor="message" className="contact--label">Message
                        <textarea name="message" className="contact--input"
                            id="message"
                            rows="8"
                            placeholder="Type your message..." />
                    </label>
                    <label htmlFor="checkboc" className="checkbox--label">
                        <input type="checkbox" required name="checkbox" id="checkbox" />
                        <span className="text-sm">I accept the terms</span>
                    </label>
                    <div>
                        <input className="btn btn-primary contact--form--btn" type="submit" value="Send" />
                    </div>
                </div>
            </form>
        </section>
    )
}
export default ContactMe;