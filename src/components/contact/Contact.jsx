import React from 'react';
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import {useRef} from "react";
import emailJs from 'emailjs-com'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailJs.sendForm('service_2x5mdpp', 'template_2q2ligk', form.current, 'GsxrKcXr8Vv7wiiwo')
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">

                    <article className='contact_option'>
                        <MdOutlineEmail className='contact_option_icon'/>
                        <h4>Email</h4>
                        <h5>dumeygator@gmail.com</h5>
                        <a href="mailto:dumeygator@gmail.com" target='_blank'>Send a message</a>
                    </article>

                    <article className='contact_option'>
                        <RiMessengerLine className='contact_option_icon'/>
                        <h4>Messenger</h4>
                        <h5>egatortutorials</h5>
                        <a href="https://m.me/hovo.serobyan">Send a message</a>
                    </article>

                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option_icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+37477000000</h5>
                        <a href="https://api.whatsapp.com/send?phone+37477777777" target='_blank'>Send a message</a>
                    </article>

                </div>
                {/*END OF CONTACT OPTIONS*/}

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;