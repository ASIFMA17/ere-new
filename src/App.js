import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SortPage from './components/SortPage';
import SearchPage from './components/SearchPage';
import TablePagination from './components/TablePagination';
import Login from './components/Login';
// IMPORT TOASTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './components/Signup';


function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Routes>

          <Route path='/' element={<TablePagination />} />
          <Route path='/sortPage' element={<SortPage />} />
          <Route path='/searchPage' element={<SearchPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>

      </Router>

      <ToastContainer theme="dark"/>
    </>
  );
}

export default App;
