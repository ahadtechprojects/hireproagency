import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-red-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">HirePro Agency</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:bg-red-600 border rounded-lg p-2">Home</Link>
          <Link to="/jobs" className="hover:bg-red-600 border rounded-lg p-2">Jobs</Link>
          <Link to="/about" className="hover:bg-red-600 border rounded-lg p-2">About</Link>
          <Link to="/contact" className="hover:bg-red-600 border rounded-lg p-2">Contact</Link>
        </nav>

        {/* Mobile Icon */}
        <motion.button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Animated Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-red-800 px-4 py-4 space-y-3 origin-top"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/" onClick={closeMenu} className="block hover:bg-red-600 border rounded-lg p-2">Home</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/jobs" onClick={closeMenu} className="block hover:bg-red-600 border rounded-lg p-2">Jobs</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/about" onClick={closeMenu} className="block hover:bg-red-600 border rounded-lg p-2">About</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/contact" onClick={closeMenu} className="block hover:bg-red-600 border rounded-lg p-2">Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
