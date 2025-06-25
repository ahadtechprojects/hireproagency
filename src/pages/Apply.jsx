import React, { useState, useRef } from 'react';
import { UploadCloud } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ApplyForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    portfolio: '',
    position: '',
    coverLetter: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplicant = {
      id: Date.now(),
      ...form,
      status: 'pending',
      submittedAt: new Date().toISOString(),
    };

    // Get existing applicants or initialize empty
    const applicants = JSON.parse(localStorage.getItem('applicants')) || [];

    // Save new applicant
    localStorage.setItem('applicants', JSON.stringify([...applicants, newApplicant]));

    toast.success('Application submitted successfully!');

    setTimeout(() => {
      navigate('/thank-you');
    }, 2000);
  };


  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow mt-24">
      <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Apply for a Position</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Text Inputs */}
        {[
          { label: 'Full Name', name: 'name', type: 'text', optional: false },
          { label: 'Email Address', name: 'email', type: 'email', optional: false },
          { label: 'Phone Number', name: 'phone', type: 'tel', optional: false },
          { label: 'Current Location', name: 'location', type: 'text', optional: false },
          { label: 'LinkedIn Profile (optional)', name: 'linkedin', type: 'url', optional: true },
          { label: 'Portfolio (optional)', name: 'portfolio', type: 'url', optional: true },
        ].map(({ label, name, type, optional }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              required={!optional}
              value={form[name]}
              onChange={handleChange}
              placeholder={`Enter your ${label.toLowerCase()}`}
              className="w-full border border-red-300 p-2 rounded mt-1 focus:outline-red-500"
            />
          </div>
        ))}


        {/* Position Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Position Applying For</label>
          <select
            name="position"
            required
            value={form.position}
            onChange={handleChange}
            className="w-full border border-red-300 p-2 rounded mt-1 focus:outline-red-500"
          >
            <option value="">Select Position</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
          </select>
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Cover Letter / Bio</label>
          <textarea
            name="coverLetter"
            rows="5"
            required
            value={form.coverLetter}
            onChange={handleChange}
            className="w-full border border-red-300 p-2 rounded mt-1 focus:outline-red-500"
            placeholder="Tell us why you're a great fit..."
          ></textarea>
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
          <div
            onClick={handleFileClick}
            className="flex items-center gap-3 bg-red-50 p-3 rounded border border-red-300 cursor-pointer hover:bg-red-100 transition"
          >
            <UploadCloud className="text-red-600" />
            <span className="text-sm text-red-700">
              {form.resume ? form.resume.name : 'Click to upload resume (PDF, DOC)'}
            </span>
          </div>
          <input
            type="file"
            name="resume"
            ref={fileInputRef}
            accept=".pdf,.doc,.docx"
            required
            onChange={handleChange}
            className="hidden"
          />
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 transition text-lg"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
};

export default ApplyForm;
