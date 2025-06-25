import React, { useEffect, useState } from 'react';
import { jobsData as staticJobs } from '../data/jobsData';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(10);
  const [allJobs, setAllJobs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const adminJobs = JSON.parse(localStorage.getItem('adminJobs')) || [];
    const combined = [...staticJobs, ...adminJobs];
    setAllJobs(combined);

    // Extract unique categories
    const uniqueCategories = ['All', ...new Set(combined.map((job) => job.category || 'Other'))];
    setCategories(uniqueCategories);
  }, []);

  // Filtered by search and category
  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || job.category === category;
    return matchesSearch && matchesCategory;
  });

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  return (
    <section className="p-6 max-w-5xl mx-auto mt-24">
      <h2 className="text-3xl font-bold text-red-800 mb-6">Available Jobs</h2>

      {/* Search + Category Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title or location"
          className="flex-1 border border-red-300 rounded p-2 focus:outline-red-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-64 border border-red-300 rounded p-2 focus:outline-red-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Job Listings */}
      <div className="grid md:grid-cols-2 gap-6">
        {visibleJobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-red-800">{job.title}</h3>
            <p className="text-sm font-bold text-red-500">{job.company} – {job.location}</p>
            <p className="text-sm text-red-600">{job.type}</p>
            <p className="text-sm text-red-700 italic mb-2">{job.category}</p>
            <p className="mt-2 text-red-800">{job.description}</p>
            <Link to="/apply">
              <button className="mt-4 bg-red-800 text-white px-4 py-2 rounded hover:bg-red-700">
                Apply
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* See More */}
      {visibleCount < filteredJobs.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-600 transition"
          >
            See More Jobs
          </button>
        </div>
      )}
    </section>
  );
};

export default Jobs;
