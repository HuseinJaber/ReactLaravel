import React, { useState } from 'react';
import axios from 'axios';
import LoginModal from './LoginModal';
import Registration from './Registration';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('access_token') !== null);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegistrationOpen, setRegistrationOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const openRegistration = () => {
    setRegistrationOpen(true);
  };

  const handleLogin = (access_token) => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      // Clear the JWT token from local storage
      localStorage.removeItem('access_token');
      console.log('Logging out...');
      const response = await axios.post('http://127.0.0.1:8000/api/logout');
      console.log('Logout response:', response.data);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleRegister = (access_token) => {
    setIsLoggedIn(true);
  };

  return (
    <header className="header">
      <div className='logStatus'>
        {isLoggedIn ? (
          <button onClick={handleLogout}>الخروج</button>
        ) : (
          <>
            <button onClick={() => setLoginModalOpen(true)}>تسجيل دخول</button><br />
            <button onClick={() => setRegistrationOpen(true)}>تسجيل حساب</button>
          </>
        )}
      </div>
      <div className="logo">
        <img src="/images/babel.png" alt="Logo" />
        <p>الاخبار المحلية</p>
      </div>
      <div></div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} onLogin={handleLogin} />
      <Registration isOpen={isRegistrationOpen} onClose={() => setRegistrationOpen(false)} onRegister={handleRegister} />
    </header>
  );
}

export default Header;