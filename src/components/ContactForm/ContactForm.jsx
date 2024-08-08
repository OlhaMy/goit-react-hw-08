import { useId } from "react";
import s from "./ContactForm.module.css";

const ContactForm = ({ onData }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const { name, number } = form.elements;

    onData({
      id: useId(),
      name: name.value,
      number: number.value,
    });

    form.reset();
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input className={s.input} type="text" name="name" id={nameId} />

        <label htmlFor={numberId}>Number</label>
        <input
          className={s.input}
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
          name="number"
          id={numberId}
        />

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
