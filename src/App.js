import { useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import s from "./components/ContactForm/ContactForm.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  delContact,
  putFilter,
  addContacts,
} from "./redux/contacts/contactsActions";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(putFilter(e.currentTarget.value));
  };

  const filteredContacts = () => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const delateItem = (id) => {
    return dispatch(delContact(id));
  };

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts && dispatch(addContacts(contacts));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={handleFilterChange}
        inputStyle={s.input}
      />
      <ContactList contactsFiltered={filteredContacts} onClick={delateItem} />
    </div>
  );
};

export default App;
