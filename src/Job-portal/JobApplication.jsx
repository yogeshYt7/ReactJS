import React, { useState } from 'react';

let JobApplication = () => {
  const [formData, setFormData] = useState({ title: '', description: '', requirements: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your job posting logic goes here
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleInputChange} required />

        <label>Requirements:</label>
        <textarea name="requirements" value={formData.requirements} onChange={handleInputChange} required />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default JobApplication;
