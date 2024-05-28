import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    console.log('Sign In:', { email, password });
  };

  return (
    <div>
      <Navbar/>
      <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div> 
    <Footer/>
    </div>
    
  );
};

export default SignIn;
