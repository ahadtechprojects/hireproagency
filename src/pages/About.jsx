import React from 'react';
import { Globe, Handshake, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <main className="pt-24 px-4 max-w-5xl mx-auto space-y-12">
      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow rounded-xl p-8 text-center"
      >
        <h2 className="text-4xl font-bold text-red-700 mb-4">About HirePro</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We are a global hiring agency focused on delivering top-tier talent to innovative companies.
          Our team bridges the gap between opportunity and skill—helping businesses grow, and careers thrive.
        </p>
      </motion.section>

      {/* Mission */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-red-50 rounded-xl shadow p-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <Target className="text-red-700" />
          <h3 className="text-2xl font-semibold text-red-800">Our Mission</h3>
        </div>
        <p className="text-gray-700 text-lg">
          We believe in connecting passionate professionals with companies that value innovation, culture,
          and impact. Our mission is to empower organizations through reliable hiring and build a better workforce for tomorrow.
        </p>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-white rounded-xl shadow p-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <Handshake className="text-red-700" />
          <h3 className="text-2xl font-semibold text-red-800">Why Choose HirePro?</h3>
        </div>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Decade-long experience across industries</li>
          <li>Extensive vetted global talent network</li>
          <li>Customized hiring solutions</li>
          <li>Fast turnaround with high retention rates</li>
        </ul>
      </motion.section>

      {/* Global Reach */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-red-50 rounded-xl shadow p-8"
      >
        <div className="flex items-center gap-3 mb-3">
          <Globe className="text-red-700" />
          <h3 className="text-2xl font-semibold text-red-800">Our Global Reach</h3>
        </div>
        <p className="text-gray-700 text-lg">
          From Abuja to Amsterdam, Lagos to London—we support international companies with culturally aligned,
          high-performing professionals. We help startups, agencies, and enterprises hire smarter.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="bg-white rounded-xl shadow p-8 text-center"
      >
        <h4 className="text-2xl font-bold text-red-700 mb-2">Partner with Us</h4>
        <p className="text-gray-700 mb-6 text-lg">
          Looking to build a world-class team? Let’s talk. HirePro is here to simplify your hiring journey.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition text-lg">
          Contact Us
        </button>
      </motion.section>
    </main>
  );
};

export default About;
