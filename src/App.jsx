import { useDispatch, useSelector } from "react-redux";
import { deleteContact, addContact, fetchContacts } from "./redux/contactsOps";
import { changeFilter } from "./redux/filtersSlice";
import {
  selectFilteredContacts,
  selectNameFilter,
  selectIsError,
  selectIsLoading,
} from "./redux/selectors";
import { ContactForm, ContactList, SearchBox } from "components";
import Loader from "./components/Loader/Loader";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      {isLoading && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      {isError && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Something went wrong, try again later!
        </div>
      )}
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </>
  );
}

export default App;
