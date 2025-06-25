import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
  });

  const [applicants, setApplicants] = useState([]);

  // Load jobs and applicants on mount
  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem('adminJobs')) || [];
    setJobs(storedJobs);

    const storedApplicants = JSON.parse(localStorage.getItem('applicants')) || [];
    setApplicants(storedApplicants);
  }, []);

  // Submit new job and store in localStorage
  const handleJobSubmit = (e) => {
    e.preventDefault();
    const newJob = { ...form, id: Date.now() };
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem('adminJobs', JSON.stringify(updatedJobs));
    setForm({ title: '', company: '', location: '', type: '', description: '' });
  };

  // Delete job
  const handleDeleteJob = (id) => {
    const updated = jobs.filter((job) => job.id !== id);
    setJobs(updated);
    localStorage.setItem('adminJobs', JSON.stringify(updated));
  };

  // Update applicant status
  const updateStatus = (id, status) => {
    const updated = applicants.map(app =>
      app.id === id ? { ...app, status } : app
    );
    setApplicants(updated);
    localStorage.setItem('applicants', JSON.stringify(updated));
  };

  // Logout admin
  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  // Export to Excel
  const exportToExcel = () => {
    const data = applicants.map((a) => ({
      Name: a.name,
      Email: a.email,
      Phone: a.phone,
      Location: a.location,
      Position: a.position,
      LinkedIn: a.linkedin,
      Portfolio: a.portfolio,
      Status: a.status || 'pending',
      'Cover Letter': a.coverLetter,
      Resume: a.resume?.name || 'Uploaded',
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Applicants');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(file, 'applicants.xlsx');
  };

  return (
    <section className="p-6 max-w-6xl mx-auto mt-24 bg-gray-50 rounded-lg shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-red-800">Admin Panel</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Post Job Form */}
      <div className="mb-10 bg-white p-5 rounded shadow">
        <h3 className="text-xl font-semibold text-red-700 mb-2">Post a New Job</h3>
        <form onSubmit={handleJobSubmit} className="grid gap-3">
          <input name="title" placeholder="Job Title" value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })} className="p-2 border rounded" />
          <input name="company" placeholder="Company" value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })} className="p-2 border rounded" />
          <input name="location" placeholder="Location" value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })} className="p-2 border rounded" />
          <input name="type" placeholder="Job Type (Full-time/Remote)" value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })} className="p-2 border rounded" />
          <textarea name="description" placeholder="Description" value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })} rows="3" className="p-2 border rounded"></textarea>
          <button className="bg-red-800 text-white py-2 rounded">Add Job</button>
        </form>
      </div>

      {/* Posted Jobs */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Posted Jobs</h3>
        {jobs.length === 0 ? (
          <p>No jobs added yet.</p>
        ) : (
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li key={job.id} className="border rounded p-4 shadow">
                <h4 className="font-bold">{job.title}</h4>
                <p className="text-sm">{job.company} – {job.location} ({job.type})</p>
                <p>{job.description}</p>
                <button onClick={() => handleDeleteJob(job.id)} className="mt-2 text-red-500">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Applicants */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-semibold text-red-600">Job Applicants</h3>
          <button
            onClick={exportToExcel}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Export to Excel
          </button>
        </div>

        {applicants.length === 0 ? (
          <p>No applications submitted yet.</p>
        ) : (
          <ul className="space-y-6">
            {applicants.map((app) => (
              <li key={app.id} className="bg-white border rounded shadow p-4">
                <h4 className="font-bold text-lg">{app.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{app.email} | {app.phone}</p>
                <p><strong>Location:</strong> {app.location}</p>
                <p><strong>Position:</strong> {app.position}</p>
                <p><strong>LinkedIn:</strong> {app.linkedin || 'N/A'}</p>
                <p><strong>Portfolio:</strong> {app.portfolio || 'N/A'}</p>
                <p className="mt-2"><strong>Cover Letter:</strong><br />{app.coverLetter}</p>
                <p className="mt-2"><strong>Resume:</strong> {app.resume?.name || 'Uploaded'}</p>

                <div className="mt-4 flex items-center gap-4">
                  <span className="text-sm font-semibold">
                    Status:{' '}
                    <span className={`px-2 py-1 rounded ${
                      app.status === 'approved' ? 'bg-green-100 text-green-700' :
                      app.status === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {app.status || 'pending'}
                    </span>
                  </span>

                  <div className="ml-auto flex gap-2">
                    <button
                      onClick={() => updateStatus(app.id, 'approved')}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(app.id, 'rejected')}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default AdminPanel;
