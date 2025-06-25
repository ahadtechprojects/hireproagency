import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white pt-10 pb-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">HirePro Agency</h3>
          <p className="text-sm leading-relaxed">
            We connect top tech talent with innovative companies across the globe. Building the future, one hire at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-red-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-300">About</Link></li>
            <li><Link to="/jobs" className="hover:text-red-300">Jobs</Link></li>
            <li><Link to="/contact" className="hover:text-red-300">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-300 cursor-pointer">Remote Hiring</li>
            <li className="hover:text-red-300 cursor-pointer">Tech Recruiting</li>
            <li className="hover:text-red-300 cursor-pointer">Talent Matching</li>
            <li className="hover:text-red-300 cursor-pointer">Consulting</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16} /> Lagos, Nigeria</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +234-800-call-us</li>
            <li className="flex items-center gap-2"><Mail size={16} /> support@hirepro.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm mt-8 border-t border-red-500 pt-4">
        &copy; {new Date().getFullYear()} HirePro Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
