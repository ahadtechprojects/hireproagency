import React from 'react';

const Contact = () => {
  return (
    <section className="p-6 max-w-3xl mx-auto mt-24 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-bold text-red-800 mb-4">Get in Touch</h2>
      <form className="grid gap-4">
        <input type="text" placeholder="Name" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <textarea rows="5" placeholder="Message" className="p-2 border rounded"></textarea>
        <button className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-600">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
