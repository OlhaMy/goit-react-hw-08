import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onData={addContact} />
      <SearchBox value={inputValue} onChange={setInputValue} />
      <ContactList contacts={contacts} filter={inputValue} />
    </>
  );
}

export default App;
