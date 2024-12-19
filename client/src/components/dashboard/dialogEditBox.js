import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';
import blogdetails from '../controller/blogdetails';

const DialogEditBox = ({ EditViewCondition, dialogEdit, oncloseEditDialog, ViewDetails }) => {
  const [dialogViewDetails, setDialogViewDetails] = useState({ title: '', comment: '', id: '' });
  const open = dialogEdit;

  useEffect(() => {
    const { title, comments, id } = ViewDetails;
    setDialogViewDetails({ title: title || '', comment: comments || '', id: id || '' });
  }, []);

  const handleClose = () => {
    oncloseEditDialog(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setDialogViewDetails({
      ...dialogViewDetails,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    const { title, comment, id } = dialogViewDetails;
    if (EditViewCondition === 'New') {
      let details = {
        title: title,
        comment: comment,
        id: localStorage.getItem('userId'),
      };
      blogdetails
        .blogCreate(details)
        .then(async result => {
          await oncloseEditDialog(false);
          console.log(result);
        })
        .catch(error => {
          console.log('in errror', error);
        });
    } else {
      let details = {
        title: title,
        comment: comment,
      };
      blogdetails
        .blogUpdate(details, id)
        .then(async result => {
          await oncloseEditDialog(false);
          // dialogEdit(false);
          console.log(result);
        })
        .catch(error => {
          console.log('in errror', error);
        });
    }
  };

  return (
    <div>
      <Dialog style={{ minWidth: '500px !important' }} open={open} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle style={{ display: 'flex', justifyContent: 'center' }} id='alert-dialog-title'>
          {EditViewCondition === 'New' ? 'New Blog' : 'Edit Blog'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ display: 'grid' }}>
            {/* <div style={{ display: "contents"}} > */}
            <input name='title' value={dialogViewDetails.title} onChange={handleInputChange} style={{ marginBottom: 10 }} type='text' placeholder='Title' />
            <textarea name='comment' value={dialogViewDetails.comment} onChange={handleInputChange} placeholder='Comment' />
            {/* </div> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>{EditViewCondition === 'New' ? 'Add Post' : 'Update'} </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogEditBox;
