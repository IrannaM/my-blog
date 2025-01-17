import { Button, Grid, TextField , Typography , AppBar , Toolbar , IconButton  , Box} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogdetails from '../controller/blogdetails';
import DialogEditBox from './dialogEditBox';
import ViewBlog from './viewBlog';

const ApiData = [
  { title: 'Post 1', comment: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
  { title: 'Post 2', comment: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species' },
  { title: 'Post 3', comment: 'Lizards are a widespread group of squamate reptiles' },
  { title: 'Post 4', comment: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
  { title: 'Post 5', comment: 'Comments 5' },
];

const ViewAllBlog = () => {
  const [viewAllDetails, setAllViewDetails] = useState(ApiData);
  const [dialogEdit, setDialogEdit] = useState(false);
  const [dialogViewDetails, setDialogViewDetails] = useState({ title: '', comment: '', id: '' });
  const [search, setSearch] = useState('');
  const navigate =useNavigate();

  useEffect(() => {
    blogdetails
      .blogAllDetails()
      .then(result => {
        setAllViewDetails(result.data.Data);
      })
      .catch(error => {
        console.log('in error', error);
      });
  }, [dialogEdit]);

  // useEffect(() => {
  //   console.log('in effect useEffect search :: ');
  //   blogdetails
  //     .searchDetails()
  //     .then(result => {
  //       setAllViewDetails(result.data.Data);
  //     })
  //     .catch(error => {
  //       console.log('in error', error);
  //     });
  // }, [search]);

  const handleEdit = () => {
    setDialogEdit(true);
  };

  const dialogEditClose = useCallback(
    data => {
      console.log('in dialogEdit :: After === dialogEditClose', data);
      setDialogEdit(data);
    },
    [dialogEdit]
  );

  const handleSearch = e => {
    console.log('in search button', e.target.value);
    setSearch(e.target.value);
    // blogdetails
    //   .searchDetails(e.target.value)
    //   .then(result => {
    //     setAllViewDetails(result.data.Data);
    //   })
    //   .catch(error => {
    //     console.log('in error', error);
    //   });
  };

  useEffect(() => {
    const value = search;
    const result = ApiData.filter((ele , i)=>{
      if(ele.comment.match(value) || ele.title.match(value) ){
           return ele
      }
  })
  // console.log("result :: ", result);
  setAllViewDetails(result);
  }, [search]);


  const handleLogot =()=>{
    navigate('/');
  }

  return (
    // <div>
    //   {dialogEdit && <DialogEditBox EditViewCondition={'New'} dialogEdit={dialogEdit} oncloseEditDialog={dialogEditClose} ViewDetails={dialogViewDetails} />}
    //   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //     <h2>BLOG POST</h2>
    //   </div>
    //   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //     <div style={{ paddingRight: 25 }}>
    //       <TextField onBlur={handleSearch} id='outlined-basic' label='Search...' variant='outlined' size='small' />
    //     </div>
    //     <div>
    //       <Button variant='outlined' size='small' onClick={handleEdit}>
    //         {' '}
    //         Add Blog{' '}
    //       </Button>
    //     </div>
    //   </div>
    //   <div style={{ marginTop: 25 }}>
    //     <ViewBlog data={viewAllDetails} />
    //   </div>
    // </div>
      <Grid sx={{ display:'flex' , justifyContent:"center" , fontFamily:'auto'}} container>
        {dialogEdit && <DialogEditBox EditViewCondition={'New'} dialogEdit={dialogEdit} oncloseEditDialog={dialogEditClose} ViewDetails={dialogViewDetails} />}
        <Grid item xs={12} md={12}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 , display:'flex', justifyContent:'center' }}>
                  BLOG POST
                </Typography>
                <Button variant="outlined" size='medium' color="inherit" onClick={handleLogot}>Login</Button>
              </Toolbar>
            </AppBar>
            <Grid item xs={12} md={12} sx={{display: 'flex' , p:'12px' }}>
              <Grid item xs={3} md={3}  />
              <Grid item xs={4} md={4}  >
                <TextField onBlur={handleSearch} id='outlined-basic' label='Search...' variant='outlined' size='small' fullWidth />
              </Grid>
              <Grid item xs={2} md={2} sx={{display: 'flex' , justifyContent: 'center' , alignSelf :'center'}} >
                <Button variant="outlined" size='medium' color='primary' onClick={handleEdit}>
                  Add Blog
                </Button>
              </Grid>
              <Grid item xs={3} md={3}  />
            </Grid>
            <Grid item xs={12} md={12} sx={{display: 'flex' , p:'12px' }}>
              <Grid item xs={2} md={2} />
              <Grid item xs={8} md={8} >
                <ViewBlog data={viewAllDetails} />
              </Grid>
              <Grid item xs={2} md={2} />
            </Grid>
          </Box>
        </Grid>
      </Grid>
  );
};

export default ViewAllBlog;
