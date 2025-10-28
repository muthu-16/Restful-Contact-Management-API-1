import React, { useEffect, useState } from 'react';
import { getContacts, deleteContact } from '../api';
import ContactItem from './ContactItem';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(res => setContacts(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteContact(id).then(() => {
      setContacts(contacts.filter(c => c._id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Contacts</h2>
      {contacts.map(contact => (
        <ContactItem key={contact._id} contact={contact} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ContactList;
