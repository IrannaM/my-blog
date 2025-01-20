import { TextField , Grid, Button , Card } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate , Link } from 'react-router-dom';

const AppForm =()=>{
    const navigate =useNavigate();
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: ''
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    // };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <Grid sx={{display:'flex' , height :'40vw' , }}>
        <Card variant="outlined" sx={{ maxWidth: 350 , m :'auto' , p :'12px' , fontFamily:'auto' }}  >
            <Grid sx={{ display:'flex' , justifyContent:"center"}}  container spacing={2}>
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
                    <Grid ><strong><span> Sign Up </span></strong></Grid>
                </Grid>
                <Grid item xs={10} md={10} sx={{ display:'flex' , justifyContent:"center"}}>
                    {/* <TextField 
                        fullWidth 
                        label ='First Name'
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    /> */}
                    <TextField
                        fullWidth
                        label="First Name"
                        {...register('firstName', { required: 'First name is required' })}
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                    />
                </Grid>
                <Grid item xs={10} md={10} sx={{ display:'flex' , justifyContent:"center"}}>
                    {/* <TextField 
                        fullWidth 
                        label ='Last Name'
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    /> */}
                    <TextField
                        fullWidth
                        label="Last Name"
                        {...register('lastName', { required: 'Last name is required' })}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                    />
                </Grid>
                <Grid item xs={10} md={10} sx={{ display:'flex' , justifyContent:"center"}}> 
                    {/* <TextField 
                        fullWidth 
                        label ='Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    /> */}
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        placeholder="abc@gmail.com"
                        {...register('email', { required: 'Email is required' })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </Grid>
                <Grid item xs={10} md={10} sx={{ display:'flex' , justifyContent:"center"}}> 
                    {/* <TextField 
                        fullWidth 
                        label ='Password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    /> */}
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        placeholder="********"
                        {...register('password', { required: 'Password is required' })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </Grid>
                {/* <Grid  sx={{ display:'flex' , justifyContent:'space-between'}} item xs={8} md={8} > 
                    <Button 
                        variant="contained" 
                        size="medium" 
                        color="primary" 
                        onClick={handleSubmit(onSubmit)} >SignUp</Button>
                    <Button 
                        variant="contained" 
                        size="medium" 
                        color="secondary"
                        onClick={()=> navigate('/')}
                    >
                            Cancel
                    </Button>
                </Grid> */}
                <Grid sx={{ display:'flex' , justifyContent:'space-between'}} item xs={10} md={10}>
                    <Button 
                        fullWidth
                        variant="contained" 
                        size="medium" 
                        color="primary" 
                        onClick={handleSubmit(onSubmit)} >SignUp</Button>
                </Grid>
                <Grid item xs={10} md={10} sx={{pt:'5px !important' , fontSize :'smaller', textAlign :'center' }}>
                    <span >Already have an account?</span> 
                    <Link style ={{textDecoration:'none' , color :'#0476D0'}} to = "/"> Sign In</Link>
                </Grid>
            </Grid>
        </Card>
        </Grid>
    )
}

export default AppForm;