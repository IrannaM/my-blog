import { useState , useCallback ,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Card , Button , TextField , Grid} from '@mui/material';
import SnackbarDialog from './dashboard/SnackbarDialog.js';
import { useNavigate , Link } from 'react-router-dom';
import userLoginDetails from './controller/userdetails.js';
import ForgetPassword from './forgetPassword.js';


const DuplicateLogin =() =>{
    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState('');
    const navigate =useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.blog);
    const [forgetPasswordPopup , SetforgetPasswordPopUp] = useState(false);

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

    const handleForgetPasswordOpen = () =>{
        console.log("in Open Login page")
        SetforgetPasswordPopUp(true)
    }

    const handleClosePopUp = useCallback((data) =>{
        console.log("in data :: ", data )
        SetforgetPasswordPopUp(data)
    },[forgetPasswordPopup])
    return(
        // <div className="login"> 
        //     {snackBarOpen && <SnackbarDialog open={snackBarOpen} message={snackBarMsg} close={handleClose} />}
        //     <Card className="card">
        //         <div className="h1">
        //             <strong>
        //                 <span style={{ color: "#4285F4" }}>M</span>
        //                 <span style={{ color: "#EA4335" }}>y</span>
        //                 <span style={{ color: "#FBBC05" }}>B</span>
        //                 <span style={{ color: "#4285F4" }}>l</span>
        //                 <span style={{ color: "#34A853" }}>o</span>
        //                 <span style={{ color: "#EA4335" }}>g</span>
        //             </strong>
        //         </div>
        //         <div className="heading"><strong>Welcome to MyBlog</strong></div>
        //         <div className="h2"><strong><span>Sign In</span></strong></div>
        //         <div className="email">
        //                 <TextField
        //                     id="email"
        //                     variant="outlined"
        //                     type="email"
        //                     label="Email"
        //                     placeholder="abc@gmail.com"
        //                     margin="normal"
        //                     required
        //                     fullWidth
        //                     value={email}
        //                     onChange={handleChangeEmail}
        //                 />
        //             </div>
        //             <div className="password">
        //                 <TextField
        //                     id="password"
        //                     variant="outlined"
        //                     type="password"
        //                     label="Password"
        //                     placeholder="********"
        //                     margin="normal"
        //                     required
        //                     fullWidth
        //                     value={password}
        //                     onChange={handleChangePassword}

        //                 />
        //             </div>
        //             <div className="signOut">
        //                 <Button
        //                     type="submit"
        //                     fullWidth
        //                     variant="contained"
        //                     color="primary"
        //                     onClick={handleClick}
        //                 >
        //                     SignIn
        //                 </Button>
        //             </div>
        //     </Card>
        // </div>
        // <div className="login"> 
        //     {snackBarOpen && <SnackbarDialog open={snackBarOpen} message={snackBarMsg} close={handleClose} />}
        //     <Card variant="outlined" sx={{ maxWidth: 350 , m :'auto' , p :'12px' }}  >
        //         <Grid sx={{ display:'flex' , justifyContent:"center"}} container spacing={2}>
        //             <Grid sx={{justifyItems:'center' , fontSize : 18 , fontFamily:'auto'}} item xs={10} md={10}>
        //                 <Grid >
        //                     <strong>
        //                         <span style={{ color: "#4285F4" }}>M</span>
        //                         <span style={{ color: "#EA4335" }}>y</span>
        //                         <span style={{ color: "#FBBC05" }}>B</span>
        //                         <span style={{ color: "#4285F4" }}>l</span>
        //                         <span style={{ color: "#34A853" }}>o</span>
        //                         <span style={{ color: "#EA4335" }}>g</span>
        //                     </strong>
        //                 </Grid>
        //                 <Grid sx={{p:1}}><strong>Welcome to MyBlog</strong></Grid>
        //                 <Grid ><strong><span>Sign In</span></strong></Grid>
        //             </Grid>
        //             <Grid item xs={10} md={10}>
        //                 <TextField
        //                     id="email"
        //                     variant="outlined"
        //                     type="email"
        //                     label="Email"
        //                     placeholder="abc@gmail.com"
        //                     margin="normal"
        //                     required
        //                     fullWidth
        //                     value={email}
        //                     onChange={handleChangeEmail}
        //                 />
        //             </Grid>
        //             <Grid item xs={10} md={10}>
        //                 <TextField
        //                     id="password"
        //                     variant="outlined"
        //                     type="password"
        //                     label="Password"
        //                     placeholder="********"
        //                     margin="normal"
        //                     required
        //                     fullWidth
        //                     value={password}
        //                     onChange={handleChangePassword}
        //                 />
        //             </Grid>
        //             <Grid sx={{pb:2}} item xs={10} md={10}>
        //                 <Button
        //                     type="submit"
        //                     fullWidth
        //                     variant="contained"
        //                     color="primary"
        //                     onClick={handleClick}
        //                 >
        //                     SignIn
        //                 </Button>
        //             </Grid>
        //         </Grid>
        //     </Card>
        // </div>
        <Grid sx={{display:'flex' , height :'40vw'}}> 
            {snackBarOpen && <SnackbarDialog open={snackBarOpen} message={snackBarMsg} close={handleClose} />}
            {/* {forgetPasswordPopup && <ForgetPassword open_pop={forgetPasswordPopup} handleClose ={handleClosePopUp} /> } */}
            <Card variant="outlined" sx={{ maxWidth: 350 , m :'auto' , p :'12px' , fontFamily:'auto' }}  >
                <Grid sx={{ display:'flex' , justifyContent:"center"}} container spacing={2}>
                    <Grid sx={{justifyItems:'center' , fontSize : 18 }} item xs={10} md={10}>
                        <Grid >
                            <strong>
                                <span style={{ color: "#4285F4" }}>M</span>
                                <span style={{ color: "#EA4335" }}>y</span>
                                <span style={{ color: "#FBBC05" }}>B</span>
                                <span style={{ color: "#4285F4" }}>l</span>
                                <span style={{ color: "#34A853" }}>o</span>
                                <span style={{ color: "#EA4335" }}>g</span>
                            </strong>
                        </Grid>
                        <Grid sx={{p:1}}><strong>Welcome to MyBlog</strong></Grid>
                        <Grid ><strong><span>Sign In</span></strong></Grid>
                    </Grid>
                    <Grid item xs={10} md={10}>
                        <TextField
                            id="email"
                            variant="outlined"
                            type="email"
                            label="Email"
                            placeholder="abc@gmail.com"
                            // margin="normal"
                            required
                            fullWidth
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </Grid>
                    <Grid item xs={10} md={10}>
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
                        {/* <Grid onClick={handleForgetPasswordOpen} sx={{ display:'flex' , justifyContent:"end" , cursor :'pointer'}} >
                            <span style={{fontSize :'smaller' , color: '#0476D0'}}> Forget Password? </span>
                        </Grid> */}
                        {/* <Link style={{fontSize :'smaller' , textDecoration: 'none'}} to = "/forget-password"> Forget Password?</Link> */}
                    </Grid>
                    <Grid item xs={10} md={10}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                        >
                            SignIn
                        </Button>
                    </Grid>
                    <Grid item xs={10} md={10} sx={{pt:'5px !important' , fontSize :'smaller', textAlign :'center'}}>
                        <span >Don't have an account?</span> 
                        <Link style ={{textDecoration:'none' , color :'#0476D0' }} to = "/register"> Sign Up</Link>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
)}

export default DuplicateLogin;