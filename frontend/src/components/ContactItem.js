import React from 'react';

function ContactItem({ contact, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="text-lg font-bold text-gray-800">{contact.name}</h3>
      <p className="text-gray-600">Email: {contact.email}</p>
      <p className="text-gray-600">Phone: {contact.phone}</p>
      <button onClick={() => onDelete(contact._id)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
    </div>
  );
}

export default ContactItem;
