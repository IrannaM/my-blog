import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userLoginDetails from './controller/userdetails.js';
import SnackbarDialog from './dashboard/SnackbarDialog.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMsg, setSnackBarMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(state => state.blog);

  useEffect(() => {
    let msg = data.error?.data?.Error || 'Something went wrong';
    setSnackBarMsg(msg);
  }, [snackBarOpen]);

  const handleSubmit = async event => {
    event.preventDefault();
    // Add your authentication logic here
    // console.log('Email:', email);
    // console.log('Password:', password);
    var loginDetails = {
      email: email,
      password: password,
    };

    dispatch(userLoginDetails.fetchPosts(loginDetails));
    if (data.data.Status) {
      navigate('/view');
    } else {
      setTimeout(() => {
        setSnackBarOpen(true);
      }, 500);
    }
  };

  const handleClose = useCallback(data => {
    setSnackBarOpen(data);
    setSnackBarMsg('');
  });

  return (
    <div className='login-container'>
      {snackBarOpen && <SnackbarDialog open={snackBarOpen} message={snackBarMsg} close={handleClose} />}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type='email' value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} required maxLength='10' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
