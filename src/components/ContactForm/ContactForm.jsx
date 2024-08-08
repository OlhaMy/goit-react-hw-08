import { useId } from "react";

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
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input type="text" name="name" id={nameId} />

        <label htmlFor={numberId}>Number</label>
        <input type="text" name="number" id={numberId} />

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
