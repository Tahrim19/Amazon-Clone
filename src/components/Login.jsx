import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'
import '../css/login.css'
import auth from '../Firebase'
import firebase from '../Firebase' 


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const signIn = e => {
    e.prevent.default()
    firebase.auth.SignInWithEmailAndPassword(email,password)
      .then((auth) => {
        navigate('/')
      })
      .catch(error => alert(error.message))
  }
  
  const register = e => {
    e.preventDefault();
    firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
      <img 
        className='login-logo' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
        />
      </Link>

        <div className='login-container'>
            <h1>Sign In</h1>
      <form>
        <h5>E-mail</h5>
        <input type='text' value={email} onChange={e =>setEmail(e.target.value)}/>
        
        <h5>Password</h5>
        <input type='text' value={password} onChange={e =>setPassword(e.target.value)}/>

        <button type='submit' onClick={signIn} className='login-signin-btn'>Sign In</button>
        <p>
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login-register-btn'>Create your Amazon Account</button>

      </form>
        </div>
    </div>
  )
}
