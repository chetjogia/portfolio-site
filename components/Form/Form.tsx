import { FormEvent, FormEventHandler, MouseEvent, useRef } from "react";
import styles from "./Form.module.css";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import Link from "next/link";
import emailjs from '@emailjs/browser';

function Form() {
  const inputName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputSubject = useRef<HTMLInputElement>(null);
  const inputMessage = useRef<HTMLTextAreaElement>(null);
  const form = useRef<HTMLFormElement>(null);

  async function submitContact(event: FormEvent) {
    event.preventDefault();

   /*  let data = {
      email: inputEmail.current?.value,
      name: inputName.current?.value,
      subject: inputSubject.current?.value,
      message: inputMessage.current?.value,
    };

    const response = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }); */

    const serviceID = 'default_service';
   const templateID = 'template_vqa9l3a';
    const publicKey = 'VSACAKf_-IQci04RW'

    if(form.current){
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
       console.log(result.text);
   }, (error) => {
       console.log(error.text);
   });
    }

  }

  return (
    <div id="contact" className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>Contact Me</h1>
        <p>
          Thanks for checking out my portfolio! If you are interested in working with me or want more information
          about my work, get in touch by filling out the form or clicking on one of the icons below:
        </p>
        <div className={styles.buttons}>
        <Link className={styles.link} href="https://github.com/chetjogia" target="_blank"><FaGithub  className={styles.icon} /></Link>
        <Link className={styles.link} href="https://linkedin.com/in/chetanjogia" target="_blank"><FaLinkedin className={styles.icon}/></Link>
        <Link className={styles.link} href="https://www.instagram.com/chetjogiaguitar/" target="_blank"><FaInstagram className={styles.icon}/></Link>
        </div>
      </div>

      <form ref={form} className={styles.form} onSubmit={submitContact}>
       
        <label htmlFor="name" className="mt-4 mb-2 italic">
          Name
        </label>
        <input
          ref={inputName}
          className={styles.inputName}
          id="name"
          name="from_name"
          type="text"
          autoComplete="name"
          required
        />
        <label htmlFor="email" className="mb-2 italic">
          Email
        </label>
        <input
          ref={inputEmail}
          className={styles.inputEmail}
          id="email"
          name="from_email"
          type="email"
          autoComplete="email"
          required
        />
        <label htmlFor="name" className="mb-2 italic">
          Subject
        </label>
        <input
          ref={inputSubject}
          className={styles.inputSubject}
          id="subject"
          name="subject"
          type="text"
          autoComplete="subject"
          required
        />
        <label htmlFor="message" className="mb-2 italic">
          Message
        </label>
        <textarea
          ref={inputMessage}
          className={styles.inputMessage}
          id="message"
          name="message"
          rows={4}
          cols={50}
          autoComplete="message"
          required
        ></textarea>

        <button
          type="submit"
          className="mt-3 px-4 py-2 font-bold text-white bg-light-coral rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
