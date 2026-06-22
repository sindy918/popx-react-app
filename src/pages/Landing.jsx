import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="landing-container fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end', paddingBottom: '20px' }}>
      {/* Top Branding Section */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          {/* Logo Mark */}
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6C25FF 0%, #CEBAFB 100%)',
            boxShadow: '0 4px 10px rgba(108, 37, 255, 0.3)'
          }}></div>
          <span style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.5px', color: '#1D2226' }}>PopX</span>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h1 style={{ marginBottom: '4px', fontSize: '28px', fontWeight: '800' }}>Welcome to PopX</h1>
        <p className="subtitle" style={{ marginBottom: '24px', fontSize: '15px', color: '#5D5D5D', lineHeight: '1.5' }}>
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
        <Link to="/signup" className="btn btn-primary">
          Create Account
        </Link>
        <Link to="/login" className="btn btn-secondary" style={{ marginTop: '4px' }}>
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}
