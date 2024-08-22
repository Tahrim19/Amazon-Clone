import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../css/login.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

        <p>
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className='login-registerButton'>Create your Amazon Account</button>

      </form>
        </div>
    </div>
  )
}
