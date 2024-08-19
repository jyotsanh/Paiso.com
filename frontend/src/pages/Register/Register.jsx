import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/register/', formData);
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data) {
        const { errors } = error.response.data;
        setError(errors);
      } else {
        setError({ general: 'An unexpected error occurred. Please try again.' });
      }
    }
  };

  return (
    <div className="reg-container">
    <div className="reg-box">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="reg-form-grid">
          <div className="reg-input-container">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="reg-input-container">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="reg-input-container">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              required
            />
            {error && error.username && (
              <div className="reg-error">Username: {error.username[0]}</div>
            )}
          </div>
          <div className="reg-input-container">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
            />
            {error && error.email && (
              <div className="reg-error">Email: {error.email[0]}</div>
            )}
          </div>
          <div className="reg-input-container">
            <i className="fas fa-lock"></i>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
            <i className={`fas fa-eye${showPassword ? '-slash' : ''}`} onClick={handlePasswordVisibility}></i>
          </div>
          <div className="reg-input-container">
            <i className="fas fa-lock"></i>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password2"
              value={formData.password2}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              required
            />
            <i className={`fas fa-eye${showPassword ? '-slash' : ''}`} onClick={handlePasswordVisibility}></i>
          </div>
        </div>
        {error && error.non_field_errors && (
          <div className="reg-error">{error.non_field_errors[0]}</div>
        )}
        <button type="submit" className="reg-submit-btn">Register</button>
        
        <div className="reg-login-link">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default RegisterPage;
