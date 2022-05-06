import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdPhoneInTalk } from 'react-icons/md';
import auth from '../../Spacial/firebase_init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { BiLogOutCircle } from 'react-icons/bi';
import { RiShieldUserLine } from 'react-icons/ri';

const Header = () => {
    const [user] = useAuthState(auth);
    
    return (
        <nav>
            <div class="px-3 py-2 border-bottom">
                <div class="container d-flex flex-wrap justify-content-between align-items-center ">
                    <span>HelpLine <MdPhoneInTalk className='text-danger'/> <small>+123-4567-987</small></span>
                    <div>

                    </div>
                    {
                        user ?<span><span className='h5'><RiShieldUserLine/> {user.displayName}</span> <button className='btn btn-outline-secondary' title='Sign Out' onClick={()=>signOut(auth)}><BiLogOutCircle/></button></span>:
                        <div class="d-flex">
                        <NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to="/login">Login</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to="/register">Register</NavLink>
                    </div>
                    }
                </div>
            </div>
            <div class="px-3 py-2 bg-info text-white ">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">Goods Store
                        </Link>

                        <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 h6">
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "link nav-link text-white")} aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "link nav-link text-white")} to="/blogs">Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "link nav-link text-white")} to="/add-item">Add Item</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "link nav-link text-white")} to="/all-product">All Item</NavLink>
                                {/* <NavLink className="nav-link text-white" to="/all-product">All Item</NavLink> */}
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? "active nav-link" : "link nav-link text-white")} to="/my-item">My item</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Header;