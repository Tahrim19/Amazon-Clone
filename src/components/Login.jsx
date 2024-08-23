import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/login.css';
import { auth } from '../Firebase'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Auth methods

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use the modular API
      navigate('/');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use the modular API
      navigate('/');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img 
          className='login-logo' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
          alt='Amazon Logo'
        />
      </Link>

      <div className='login-container'>
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button 
            type='submit' 
            onClick={signIn} 
            className='login-signin-btn'
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>

          <button 
            onClick={register} 
            className='login-register-btn'
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create your Amazon Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
