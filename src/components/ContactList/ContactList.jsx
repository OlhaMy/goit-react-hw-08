const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
