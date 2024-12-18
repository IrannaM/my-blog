import React , {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogViewBox = ({dialogViewDetails , dialogView , oncloseViewDialog}) => {
    const open = dialogView
    const details = dialogViewDetails;

  const handleClose = () => {
    oncloseViewDialog(false);
  };

  return (
    <div>
      <Dialog style={{ minWidth: '500px !important' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style ={{display: 'flex',  justifyContent: 'center'}} id="alert-dialog-title">
          {details.title}
        </DialogTitle>
        <div style={{borderBottom: '1px solid #000'}}/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {details.comments}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogViewBox;