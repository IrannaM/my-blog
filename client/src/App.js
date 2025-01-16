
import { 
  BrowserRouter ,
  Routes,
  Route,
} from 'react-router-dom';
import React , { Suspense } from 'react'
import './App.css';
import Login from './components/login';
import {CircularProgress, Grid} from "@mui/material";
// import ViewAllBlog from './components/dashboard/viewAllBlog';
// import DuplicateLogin from './components/duplicateLogin'

const ViewAllBlog = React.lazy(() => import('./components/dashboard/viewAllBlog'));
const DuplicateLogin = React.lazy(() => import('./components/duplicateLogin'));


function App() {
  return (
    <Suspense 
      fallback={
        <Grid sx={{display:'flex', justifyContent:'center'}}>
          <CircularProgress/>
        </Grid>
      }
    >
    <BrowserRouter>
      <Routes>
          {/* <Route path="/" exact element={<Login />} /> */}
          <Route path="/" exact element={<DuplicateLogin />} />
          <Route path="/view" element={<ViewAllBlog />}></Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
    
    
  );
}

export default App;
