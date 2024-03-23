import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
let [formData, setFormData] = useState({ email: '', password: '' });

  let handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    navigate('/jobs');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
}

export default Login;
