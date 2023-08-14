import React, { useState } from 'react';
import axios from 'axios';

const Registration = ({ isOpen, onClose, onRegister }) => {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', { name, email, password }); 
      const { access_token } = response.data;

     
      onRegister(access_token);

      onClose(); 
    } catch (error) {
        console.log(error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className={`registration-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>تسجيل حساب جديد</h2>
        <input
          type="text" 
          placeholder="الاسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleRegister}>تسجيل حساب</button>
      </div>
    </div>
  );
};

export default Registration;