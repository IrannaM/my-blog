import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DialogEditBox from './dialogEditBox';
import DialogViewBox from './dialogViewBox';
import { Grid , Box , Button , Card , CardContent , Typography} from '@mui/material';

export default function ViewBlog({ data }) {
  const [dialogView, setDialogView] = useState(false);
  const [dialogViewDetails, setDialogViewDetails] = useState({ title: '', comment: '', id: '' });
  const [dialogEdit, setDialogEdit] = useState(false);
  const navigate = useNavigate();

  const handleView = (title, comment) => {
    // console.log('in handleView', title, comment);
    setDialogView(true);
    setDialogViewDetails({ title: title, comment: comment });
  };

  const dialogViewClose = useCallback(
    data => {
      setDialogView(data);
    },
    [dialogView]
  );

  const handleEdit = (title, comment, id) => {
    let details = {
      title: title,
      comments: comment,
      id: id,
    };
    setDialogEdit(true);
    setDialogViewDetails(details);
  };

  const dialogEditClose = useCallback(
    data => {
      // window.location.reload();
      setDialogEdit(data);
    },
    [dialogEdit]
  );

  const uiDetails = data.length == 0 ? 
    <Grid sx={{textAlign :'center'}} item xs={10} md={10} >
        <h4>No record found</h4>
    </Grid>
    :
    data.map((ele, ind) => {
      return (
        // <div key={Math.random()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        //   <Card sx={{ display: 'flex', justifyContent: 'center', width: '50%', marginBottom: '10px' }}>
        //     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        //       <CardContent sx={{ display: 'flex', justifyContent: 'center', flex: '1 0 auto' }}>
        //         <Typography component='div' variant='h5'>
        //           {ele.title}
        //         </Typography>
        //       </CardContent>
        //       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 1, pb: 1 }}>{ele.comment}</Box>
        //     </Box>
        //   </Card>
        //   <div style={{ paddingLeft: 50 }}>
        //     <Button size='small' color='primary' onClick={() => handleView(ele.title, ele.comment)}>
        //       View
        //     </Button>
        //     <Button size='small' color='primary' onClick={() => handleEdit(ele.title, ele.comment, ele._id)}>
        //       Edit
        //     </Button>
        //   </div>
        // </div>
          <Grid key={Math.random()} item xs={12} md={12} sx={{display: 'flex' , p:'12px' , fontFamily:'auto' }}>
            <Grid item xs={9} md={9} >
              <Card >
                <Box >
                  <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography component='div' variant='h5'>
                      {ele.title}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p:'0px 10px 10px'}}>{ele.comment}</Box>
                </Box>
              </Card>
            </Grid>
            {/* <Grid item xs={1} md={1}/> */}
            <Grid item xs={3} md={3} sx={{alignSelf:'center' , display:'flex' , justifyContent : 'space-evenly'}}>
              <Button variant="outlined" size='medium' color='primary' onClick={() => handleView(ele.title, ele.comment)}>
                View
              </Button>
              <Button variant="outlined" size='medium' color='primary' onClick={() => handleEdit(ele.title, ele.comment, ele._id)}>
                Edit
              </Button>
            </Grid>
          </Grid>
      );
    });
  return (
    <>
      {uiDetails}
      {dialogView && <DialogViewBox dialogViewDetails={dialogViewDetails} dialogView={dialogView} oncloseViewDialog={dialogViewClose} />}
      {dialogEdit && <DialogEditBox newEditCondition={'Edit'} dialogEdit={dialogEdit} oncloseEditDialog={dialogEditClose} ViewDetails={dialogViewDetails} />}
    </>
  );
}
