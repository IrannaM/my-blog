import React , {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogEditBox = ({EditViewCondition  , dialogEdit , oncloseEditDialog}) => {
    const open = dialogEdit

    const handleClose =() =>{
        oncloseEditDialog(false)
    }

  return (
    <div>
      <Dialog style={{ minWidth: '500px !important' }}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style ={{display: 'flex',  justifyContent: 'center'}} id="alert-dialog-title">
          { EditViewCondition === 'New' ? 'New Blog' : 'Edit Blog'}
        </DialogTitle>
        <DialogContent>
            <DialogContentText style ={{display: "grid"}}>
                {/* <div style={{ display: "contents"}} > */}
                    <input style={{ marginBottom: 10}}
                        type="text"
                        placeholder="Title"
                    />
                    <textarea 
                        placeholder="Comment"
                    />
                {/* </div> */}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button >{ EditViewCondition === 'New' ? 'Add Post' : 'Update'} </Button>
            <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogEditBox;