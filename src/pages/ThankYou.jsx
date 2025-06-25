import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-red-50 text-center px-4">
    <h1 className="text-3xl font-bold text-red-700 mb-4">🎉 Thank you for applying!</h1>
    <p className="text-gray-700 mb-6">We’ve received your application and will be in touch shortly.</p>
    <Link
      to="/"
      className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
    >
      Back to Home
    </Link>
  </section>
);

export default ThankYou;
