"use client";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pay03ib', 'template_hqddj0a', form.current, {
        publicKey: 'lROG3sen8B7F0LZUn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      
      <input type="text" name="user_name" />
      
      <input type="email" name="from_name" />
      
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default ContactEmail;