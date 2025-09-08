import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(null); // ✅ Feedback message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tcc2n6e", // ✅ Your EmailJS service ID
        "template_rl98f2o", // ✅ Your EmailJS template ID
        form.current,
        "l0Ua2LfN05mB3v3xw", // ✅ Your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessageSent("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        {/* ------- Contact Options ------- */}
        <div className="contact-options">
          {/* Email */}
          <article className="contact-option">
            <MdOutlineMail className="icon" />
            <h4>Email</h4>
            <h5>khaled.KMA8999@gmail.com</h5>
            <a href="mailto:khaled.KMA8999@gmail.com" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>

          {/* Messenger */}
          <article className="contact-option">
            <RiMessengerLine className="icon" />
            <h4>Messenger</h4>
            <h5>Khaled Magdy</h5>
            <a
              href="https://m.me/Khaled.Magdy" // 🔁 Replace with your actual Facebook username
              target="_blank"
              rel="noreferrer">
              Send a Message
            </a>
          </article>

          {/* WhatsApp */}
          <article className="contact-option">
            <BsWhatsapp className="icon" />
            <h4>WhatsApp</h4>
            <h5>+20 106 303 9216</h5>
            <a
              href="https://wa.me/201063039216" // ✅ WhatsApp API format
              target="_blank"
              rel="noreferrer">
              Send a Message
            </a>
          </article>
        </div>

        {/* ------- Contact Form ------- */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {/* ✅ Feedback message */}
          {messageSent && <p className="feedback">{messageSent}</p>}
        </form>
      </div>
    </section>
  );
};
