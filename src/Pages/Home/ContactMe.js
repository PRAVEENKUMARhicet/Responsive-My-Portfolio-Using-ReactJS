import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_mlnu7lc', 'template_vjrt8re', form.current, {
                publicKey: 'UZHP8TIVeT2BdKc8H',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2 className="skills--section--heading">Contact Me</h2>
                {/* <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum veritatis eos.</p> */}
            </div>
            {/* <form action="" className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">Name</span>
                        <input
                            type="text"
                            className="contact--input"
                            name="first-name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input"
                            name="email"
                            id="email"
                            required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">phone-number</span>
                        <input
                            type="number"
                            className="contact--input"
                            name="phone-number"
                            id="phone-number"
                            required
                        />
                    </label>
                </div>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input"
                        id="message"
                        rows="8"
                        placeholder="Type your message..."
                    />
                </label>
                <label htmlFor="checkboc" className="checkbox--label">
                    <input type="checkbox" required name="checkbox" id="checkbox" />
                    <span className="text-sm">I accept the terms</span>
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form> */}
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