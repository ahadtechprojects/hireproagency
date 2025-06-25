import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import ThankYou from './pages/ThankYou';
import Login from './pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {/* Protected Route for Admin Panel */} 
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<div className="text-center text-red-700">404 - Page Not Found</div>} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default App;
