import { Button, TextField } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
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
    blogdetails
      .searchDetails(e.target.value)
      .then(result => {
        setAllViewDetails(result.data.Data);
      })
      .catch(error => {
        console.log('in error', error);
      });
  };

  return (
    <div>
      {dialogEdit && <DialogEditBox EditViewCondition={'New'} dialogEdit={dialogEdit} oncloseEditDialog={dialogEditClose} ViewDetails={dialogViewDetails} />}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>BLOG POST</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ paddingRight: 25 }}>
          <TextField onBlur={handleSearch} id='outlined-basic' label='Search...' variant='outlined' size='small' />
        </div>
        <div>
          <Button variant='outlined' size='small' onClick={handleEdit}>
            {' '}
            Add Blog{' '}
          </Button>
        </div>
      </div>
      <div style={{ marginTop: 25 }}>
        <ViewBlog data={viewAllDetails} />
      </div>
    </div>
  );
};

export default ViewAllBlog;
