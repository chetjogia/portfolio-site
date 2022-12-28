import { FormEvent, FormEventHandler, MouseEvent } from "react";
import styles from "./Form.module.css";

function Form() {
    async function submitContact(event:FormEvent){
        event.preventDefault();
        alert(`hello`);
    }


  return (
    <div className={styles["container"]}>
      <div className="mb-2 text-xl font-bold">Contact us</div>
      <form className="flex flex-col" onSubmit={submitContact}>
        <label htmlFor="name" className="mb-2 italic">
          Name
        </label>
        <input
          className="mb-4 border-b-2"
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
        <label htmlFor="name" className="mb-2 italic">
          Email
        </label>
        <input
          className="mb-4 border-b-2"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <label htmlFor="name" className="mb-2 italic">
          Message
        </label>
        <input
          className="mb-4 border-b-2 h-36"
          size={2000}
          id="email"
          name="email"
          type="text"
          autoComplete="email"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
