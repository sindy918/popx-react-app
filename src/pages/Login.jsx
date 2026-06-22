import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Forms.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication by routing to profile screen
    navigate('/profile');
  };

  return (
    <div className="login-container fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginTop: '16px', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#1D2226', marginBottom: '8px' }}>
          Signin to your<br />PopX account
        </h1>
        <p className="subtitle" style={{ fontSize: '15px', color: '#5D5D5D', lineHeight: '1.5', marginBottom: 0 }}>
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-body">
          <div className="input-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
              autoComplete="email"
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
              autoComplete="current-password"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px 16px' }}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
