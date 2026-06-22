import React, { useState, useEffect, useRef } from 'react';

export default function Profile() {
  const fileInputRef = useRef(null);
  
  // Local state for user info, default to Marry Doe
  const [userInfo, setUserInfo] = useState({
    fullName: 'Marry Doe',
    email: 'Marry@gmail.Com'
  });

  const [avatar, setAvatar] = useState('/avatar.png');

  useEffect(() => {
    // Load registered user if available
    const savedUser = localStorage.getItem('popx_user');
    if (savedUser) {
      try {
        setUserInfo(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse user details', e);
      }
    }
    
    // Load saved avatar if available
    const savedAvatar = localStorage.getItem('popx_avatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    }
  }, []);

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        setAvatar(base64Data);
        localStorage.setItem('popx_avatar', base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%', margin: '-24px -20px', backgroundColor: '#F7F8FA' }}>
      {/* Top Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '24px 20px',
        borderBottom: '1px solid #EAEAEA',
        display: 'flex',
        alignItems: 'center',
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1D2226', margin: '0' }}>Account Settings</h2>
      </div>

      {/* Profile Info Content Area */}
      <div style={{ padding: '24px 20px', flex: 1 }}>
        {/* Profile Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
          {/* Avatar container */}
          <div style={{ position: 'relative', width: '76px', height: '76px' }}>
            <img
              src={avatar}
              alt="Avatar"
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150';
              }}
            />
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            {/* Small camera icon overlay */}
            <button
              onClick={handleCameraClick}
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#6C25FF',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: '0',
                color: '#FFFFFF'
              }}
              title="Upload Photo"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </button>
          </div>

          {/* User details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1D2226', margin: '0' }}>
              {userInfo.fullName}
            </h3>
            <span style={{ fontSize: '14px', color: '#5D5D5D', fontWeight: '400', wordBreak: 'break-all' }}>
              {userInfo.email}
            </span>
          </div>
        </div>

        {/* Description Paragraph */}
        <p style={{
          fontSize: '14px',
          color: '#1D2226',
          lineHeight: '1.6',
          marginBottom: '24px',
          fontWeight: '400'
        }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        {/* Dotted separator line */}
        <div style={{
          borderBottom: '2px dotted #CBCBCB',
          width: '100%'
        }}></div>
      </div>
    </div>
  );
}
