import React, { useState } from 'react';
import axios from 'axios';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
      const { access_token } = response.data;

      
      localStorage.setItem('access_token', access_token);

      
      onLogin();

      onClose(); 
    } catch (error) {
      setError('تحقق من كلمة المرور'); 
    }
  };

  return (
    <div className={`login-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>تسجيل الدخول</h2>
        <input
          type='email'
          placeholder='البريد الإلكتروني'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='كلمة المرور'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin}>تسجيل دخول</button>
      </div>
    </div>
  );
};

export default LoginModal;