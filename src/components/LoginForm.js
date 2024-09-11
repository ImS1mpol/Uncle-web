import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email or Student Number:</label>
        <input type="text" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <div className="options">
          <label>
            <input type="checkbox" id="remember" name="remember" />
            Remember me
          </label>
          <a href="#forgot-password">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        <p>Don't have an account? <Link to="/register">Sign up</Link></p> {/* Updated Link to registration page */}
      </form>
    </div>
  );
};

export default LoginForm;
