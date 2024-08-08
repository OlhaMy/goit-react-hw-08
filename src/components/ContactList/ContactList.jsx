import s from "./ContactList.module.css";

const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <span> {name}:</span>
          <span> {number}</span>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
