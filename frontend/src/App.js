import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center py-4 text-2xl font-bold shadow">
        Contact Manager
      </header>
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactForm />
        <ContactList />
      </main>
      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; 2025 Contact Manager. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
