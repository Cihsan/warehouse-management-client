import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { Link } from 'react-router-dom';
import '../../assets/Style/Footer.css'
import auth from '../../Spacial/firebase_init';
const Footer = () => {
    const [user] = useAuthState(auth);
    return (
        <div>

            <footer className="site-footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">Goodsstore.com <i>is Inventory Site</i> you can Easily Add Yor Product at any time you will have access lifetime we stand by to support any problem</p>
                        </div>

                        <div className="col-xs-6 col-md-2">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><Link to="/blogs">Blog</Link></li>
                                {user &&<li><Link to="/add-item">Add Item</Link></li>}
                                {user &&<li><Link to="/all-product">All Item</Link></li>}
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-2">
                            <h6>Quick Links</h6>
                            <ul style={{ listStyle: 'none' }} className="footer-links">
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Contact Us</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12 align-items-center">
                            <ul style={{ listStyle: 'none' }} className="social-icons">
                                <li><Link className="facebook" to="#"><BsFacebook /></Link></li>
                                <li><Link className="twitter" to="#"><AiFillTwitterCircle /></Link></li>
                                <li><Link className="linkedin" to="#"><ImLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='border-top border-ligh pb-1'></div>
                <p className="copyright-text text-center">Copyright &copy; 2023 All Rights Reserved by goodsstore.com
                </p>
            </footer>
        </div>
    );
};

export default Footer;