import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Common/Header';
import Blogs from './Pages/Unique/Blogs';
import Home from './Pages/Unique/Home/Home';
import UpdateQuantity from './Pages/Unique/UpdateQuantity';
import AllProduct from './Pages/Unique/AllProduct';
import AddItems from './Pages/Unique/AddItems';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Unique/AccessUser/Login';
import Register from './Pages/Unique/AccessUser/Register';
import ProtectedPath from './Pages/Unique/AccessUser/ProtectedPath';
import MyItems from './Pages/Unique/MyItems';
import NotFound from './Pages/Unique/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/update-quantity/:id' element={<UpdateQuantity></UpdateQuantity>}></Route>
        <Route path='/all-product' element={<AllProduct></AllProduct>}></Route>
        <Route path='/add-item' element={
          <ProtectedPath>
            <AddItems></AddItems>
          </ProtectedPath>
        }></Route>
        <Route path='/my-item' element={
          <ProtectedPath>
            <MyItems></MyItems>
          </ProtectedPath>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
