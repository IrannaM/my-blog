
import { 
  BrowserRouter ,
  Routes,
  Route,
} from 'react-router-dom';
import { Suspense } from 'react'
import './App.css';
import Login from './components/login';
import ViewAllBlog from './components/dashboard/viewAllBlog';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/view" element={<ViewAllBlog />}></Route>
      </Routes>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
