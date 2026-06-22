import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Forms.css';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'no'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save registration details to localStorage to reflect on Profile page
    localStorage.setItem('popx_user', JSON.stringify({
      fullName: formData.fullName || 'Marry Doe',
      email: formData.email || 'Marry@gmail.Com'
    }));
    navigate('/profile');
  };

  return (
    <div className="signup-container fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginTop: '16px', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#1D2226', marginBottom: '8px' }}>
          Create your<br />PopX account
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-body">
          <div className="input-group">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder=" "
              required
              autoComplete="name"
            />
            <label htmlFor="fullName">Full Name<span>*</span></label>
          </div>

          <div className="input-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=" "
              required
              autoComplete="tel"
            />
            <label htmlFor="phone">Phone number<span>*</span></label>
          </div>

          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              required
              autoComplete="email"
            />
            <label htmlFor="email">Email address<span>*</span></label>
          </div>

          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=" "
              required
              autoComplete="new-password"
            />
            <label htmlFor="password">Password<span>*</span></label>
          </div>

          <div className="input-group">
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder=" "
              autoComplete="organization"
            />
            <label htmlFor="company">Company name</label>
          </div>

          <div className="radio-group-container">
            <span className="radio-label">Are you an Agency?<span>*</span></span>
            <div className="radio-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div className="form-actions" style={{ paddingBottom: '12px' }}>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px 16px' }}>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
