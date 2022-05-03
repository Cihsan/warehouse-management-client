import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Common/Header';
import Blogs from './Pages/Unique/Blogs';
import Home from './Pages/Unique/Home';
import Login from './Pages/Unique/Login';
import 'react-toastify/dist/ReactToastify.css';
import UpdateQuantity from './Pages/Unique/UpdateQuantity';
import AllProduct from './Pages/Unique/AllProduct';
import AddItems from './Pages/Unique/AddItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/update-quantity/:id' element={<UpdateQuantity></UpdateQuantity>}></Route>
        <Route path='/all-product' element={<AllProduct></AllProduct>}></Route>
        <Route path='/add-item' element={<AddItems></AddItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
