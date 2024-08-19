import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/login/', { email, password });
      const { data } = response.data;
      const { access_token, refresh_token } = data;
      if (access_token && refresh_token) {
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        navigate('/');
      } else {
        setError('Tokens are missing in the response.');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('Email or password is not valid.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="log-login-container">
      <div className="log-login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="log-input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="log-input-container">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          {error && <div className="log-error-message">{error}</div>}
          <div className="log-forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="log-signup-link">
            New to Paiso Nepal? <a href="register">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
