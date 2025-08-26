import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin' && password === '123456') {
      onLogin();
    } else {
      setError('Invalid credentials. Use admin/123456');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <h1 className="login-title">Moshko Family</h1>
          <p className="login-subtitle">Connect with your family and the world around you.</p>
        </div>
        <div className="login-right">
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Email or phone number"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="login-button">Log In</button>
            </form>
            <a href="#" className="forgot-password">Forgot Password?</a>
            <hr className="divider" />
            <button className="create-account-button">Create New Account</button>
          </div>
          <p className="create-page">
            <a href="#"><strong>Create a Page</strong></a> for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;