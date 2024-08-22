import { useDispatch, useSelector } from "react-redux";
import { deleteContact, addContacts } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";
import { selectContacts, selectNameFilter } from "./redux/selectors";
import { ContactForm, ContactList, SearchBox } from "components";

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleAddContact = (newContact) => {
    if (!newContact.name.trim() || !newContact.number.trim()) {
      alert("Please enter both name and number before adding a contact.");
      return;
    }

    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContacts(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </>
  );
}

export default App;
