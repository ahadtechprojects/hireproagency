import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Users, Globe, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <main className="pt-24 px-4 max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 rounded-xl shadow p-8 text-center"
      >
        <h2 className="text-4xl font-bold text-red-800 mb-4">Welcome to HirePro Agency</h2>
        <p className="text-red-800 text-lg max-w-2xl mx-auto">
          Connecting top talent with world-class companies in the digital era. Discover the future of tech recruitment today.
        </p>
      </motion.section>

      {/* Why Tech is the Future */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-red-800 rounded-xl shadow p-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <Laptop className="text-white" />
          <h3 className="text-2xl font-semibold text-white">Why Tech is the Future</h3>
        </div>
        <p className="text-white text-lg">
          The world is evolving at a digital pace. From AI and automation to cloud computing and virtual collaboration, technology is transforming how we live and work.
        </p>
      </motion.section>

      {/* Benefits */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl shadow p-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-red-800" />
          <h3 className="text-2xl font-semibold text-red-800">Benefits of Building a Tech Team</h3>
        </div>
        <ul className="list-disc list-inside text-red-900 text-lg space-y-2">
          <li>Stay competitive with digital innovation</li>
          <li>Streamline operations with automation</li>
          <li>Deliver better customer experiences</li>
          <li>Adapt to global trends in real time</li>
        </ul>
      </motion.section>

      {/* Remote Work */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-red-800 rounded-xl shadow p-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <Globe className="text-white" />
          <h3 className="text-2xl font-semibold text-white">The Rise of Remote Tech Work</h3>
        </div>
        <p className="text-white text-lg">
          With remote work now mainstream, businesses can hire talent across Lagos, Uyo, Port Harcourt—and beyond. We connect companies to professionals who deliver results, anywhere.
        </p>
      </motion.section>

      {/* Top Categories */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-red-800 rounded-xl shadow p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-white" />
          <h3 className="text-2xl font-semibold text-white">Top Job Categories</h3>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-red-800 font-medium mb-5">
          {['Frontend', 'Backend', 'DevOps', 'UI/UX Design', 'Product Management', 'Data Science', 'QA & Testing', 'Cloud Engineering', 'AI & Machine Learning'].map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition text-center"
            >
              {cat}
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-xl shadow p-8 text-center"
      >
        <h4 className="text-2xl font-bold text-red-800 mb-2">Ready to take the next step?</h4>
        <p className="text-red-900 text-lg mb-6">
          Whether you're a company looking to hire, or a candidate seeking your next role — we're here to help.
        </p>
        <Link to="/jobs"
          className="bg-red-800 text-white px-6 py-3 rounded-md hover:bg-red-700 transition text-lg">
          Explore Opportunities
        </Link>
      </motion.section>
    </main>
  );
};

export default Home;
