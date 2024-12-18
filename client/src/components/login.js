import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userLoginDetails from './controller/userdetails'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
        var loginDetails = {
            "email": email,
            "password": password
        }
        console.log("in login.jsx" , loginDetails);
        userLoginDetails.userlogin(loginDetails).then((result) =>{
            navigate('/view')
        }).catch((err)=>{
            console.log("in error details",err)
        })
        
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
            maxLength="10"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;