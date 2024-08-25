import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteContact,
  addContact,
  fetchContacts,
} from "../../redux/contacts/contactsOps";
import { changeFilter } from "../../redux/filters/filtersSlice";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import {
  selectNameFilter,
  selectFilteredContacts,
} from "../../redux/filters/selectors";
import { ContactForm, ContactList, SearchBox } from "components";
import Loader from "../Loader/Loader";

function ContactsApp() {
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
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      {isLoading && <Loader />}
      {isError && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Something went wrong, try again later!
        </div>
      )}
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </>
  );
}

export default ContactsApp;
