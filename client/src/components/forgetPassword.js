import * as React from 'react';
import { Grid , Button , TextField , Dialog ,DialogActions ,DialogContent ,DialogContentText ,DialogTitle }  from '@mui/material';

export default function ForgetPassword({open_pop , handleClose}) {
    console.log("in popUp ", open_pop)
    const open_pop_condition = open_pop;

  const handleCloseButton = () => {
    handleClose(false);
  };

  return (
    <Dialog 
        open={open_pop}
        // onClose={handleClose}
    >
        <DialogTitle sx={{textAlign:'center'}}>
            <strong><span> Forget Password </span></strong>                
        </DialogTitle>
        <DialogContent sx={{textAlign:'center'}}>
        <DialogContentText >
            Please enter valide email address
        </DialogContentText>
        <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            placeholder='abc@gmail.com'
            label="Email Address"
            type="email"
            variant="standard"
        />
        </DialogContent>
        <DialogActions sx={{display :'flex', justifyContent:'center'}} >
        <Button onClick={handleCloseButton}>Cancel</Button>
        <Button type="submit">Save</Button>
        </DialogActions>
    </Dialog> 
  );
}