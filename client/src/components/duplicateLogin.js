import { useState , useCallback ,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Card , Button , TextField} from '@mui/material';
import SnackbarDialog from './dashboard/SnackbarDialog.js';
import { useNavigate } from 'react-router-dom';
import userLoginDetails from './controller/userdetails.js';


const DuplicateLogin =() =>{
    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState('');
    const navigate =useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.blog);

    useEffect(() => {
        // console.log("in use Effect data login page==>" , data )
        setTimeout(() =>{
            let msg = snackBarMsg || data.error?.data?.Error || 'Something went wrong';
            setSnackBarMsg(msg);
        },500)
      }, [snackBarOpen]);

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
   
    const handleClick = async () => {
        if (email === "") {
            setSnackBarOpen(true);
            setSnackBarMsg('Email cannot be empty');
        }
        else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)) {
            setSnackBarOpen(true)
            setSnackBarMsg('Please provide a valid email address')
        }
        else if (password.length < 8) {
            setSnackBarOpen(true)
            setSnackBarMsg('Password should be min 8')
        }
        else {
            console.log("in login.page");
            const loginDetails = {
                email: email,
                password: password,
              };
            //  console.log("in email & password send data to backend :: ", email, password)
              
            dispatch(userLoginDetails.fetchPosts(loginDetails))
            if (data.data.Status) {
                localStorage.setItem('token', data.data.Data.token);
                localStorage.setItem('userId', data.data.Data._id);
                localStorage.setItem('firstName', data.data.Data.firstName);
                localStorage.setItem('lastName', data.data.Data.lastName);
                navigate('/view');
            } else {
                // console.log("in use Effect data login page==>" , data )
                setTimeout(() => {
                    setSnackBarOpen(true);
                }, 500);
            }
        }
    }
    const handleClose = useCallback(data => {
        setSnackBarOpen(data);
        setSnackBarMsg('');
      });
    return(
        <div className="login"> 
            {snackBarOpen && <SnackbarDialog open={snackBarOpen} message={snackBarMsg} close={handleClose} />}
            <Card className="card">
                <div className="h1">
                    <strong>
                        <span style={{ color: "#4285F4" }}>M</span>
                        <span style={{ color: "#EA4335" }}>y</span>
                        <span style={{ color: "#FBBC05" }}>B</span>
                        <span style={{ color: "#4285F4" }}>l</span>
                        <span style={{ color: "#34A853" }}>o</span>
                        <span style={{ color: "#EA4335" }}>g</span>
                    </strong>
                </div>
                <div className="heading"><strong>Welcome to MyBlog</strong></div>
                <div className="h2"><strong><span>Sign In</span></strong></div>
                <div className="email">
                        <TextField
                            id="email"
                            variant="outlined"
                            type="email"
                            label="Email"
                            placeholder="abc@gmail.com"
                            margin="normal"
                            required
                            fullWidth
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <div className="password">
                        <TextField
                            id="password"
                            variant="outlined"
                            type="password"
                            label="Password"
                            placeholder="********"
                            margin="normal"
                            required
                            fullWidth
                            value={password}
                            onChange={handleChangePassword}

                        />
                    </div>
                    <div className="signOut">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                        >
                            SignIn
                        </Button>
                    </div>
            </Card>
        </div>
    )
}

export default DuplicateLogin;