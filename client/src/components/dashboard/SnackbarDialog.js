import Snackbar from '@mui/material/Snackbar';
import React, { memo } from 'react';

const SnackbarDialog = ({ open, message, close }) => {
  const openBar = open;
  console.log('in SnackbarDialog ==>', openBar, message);
  const handleClose = () => {
    close(false);
  };
  return (
    <div>
      <Snackbar autoHideDuration={2500} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openBar} onClose={handleClose} message={message} key={'top' + 'right'} />
    </div>
  );
};

export default memo(SnackbarDialog);
