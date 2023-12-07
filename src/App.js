import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar';
import AddBookForm from './AddBookForm';
import AdminPanel from './AdminPanel';
import BooksPage from './BooksPage';
import IndividualBook from './IndividualBook';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/addbook' element={<AddBookForm/>}></Route>
        <Route path='/adminPanel' element={<AdminPanel/>}></Route>
        <Route path='/books' element={<BooksPage/>}></Route>
        <Route path='/book' element = {<IndividualBook/>}></Route>
      </Routes>
    </>
  );
}

export default App;
