"use client";

import emailjs from '@emailjs/browser';
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from 'react';
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pay03ib', 'template_hqddj0a', form.current, 'lROG3sen8B7F0LZUn')
      .then(
        () => {
          toast.success('Email sent successfully!');
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          toast.error('Failed to send email. Please try again.');
          console.error('Failed...', error.text);
        },
      );
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:chetanchavan8197@gmail.com">
          chetanchavan8197@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 flex flex-col dark:text-black"
      >
        <TextField
          variant="filled"
          fullWidth
          required
          type="email"
          name="from_name"
          placeholder="Your email"
          color="primary"
          inputProps={{ maxLength: 500 }}
          sx={{
            '& .MuiInputBase-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiFilledInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            '& .MuiFilledInput-underline:before': {
              borderBottomColor: 'white',
            },
            '& .MuiFilledInput-underline:after': {
              borderBottomColor: 'red',
            },
            '& .MuiFilledInput-input::placeholder': {
              color: 'rgba(255, 255, 255, 0.5)',
            },
          }}
        />

        <TextField
          variant="filled"
          fullWidth
          required
          name="message"
          placeholder="Your message"
          multiline
          rows={7}
          inputProps={{ maxLength: 5000 }}
          sx={{
            '& .MuiInputBase-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiFilledInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
            '& .MuiFilledInput-underline:before': {
              borderBottomColor: 'white',
            },
            '& .MuiFilledInput-underline:after': {
              borderBottomColor: 'red',
            },
            '& .MuiFilledInput-input::placeholder': {
              color: 'rgba(255, 255, 255, 0.5)',
            },
            marginTop: 7,
            marginBottom: 5,
          }}
        />

        <SubmitBtn type="submit" value="Send" />
      </form>
    </motion.section>
  );
}
