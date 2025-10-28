import React, { useState } from 'react';
import { createContact } from '../api';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createContact(form).then(() => {
      setForm({ name: '', email: '', phone: '' });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Add Contact</h2>
      <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Email" required />
      <input name="phone" value={form.phone} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Phone" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Add Contact</button>
    </form>
  );
}

export default ContactForm;
