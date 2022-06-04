import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../assets/Style/SupplyProduct.css'
import { BsArrowUpCircle } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()

const SupplyProduct = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const navigate = useNavigate()
    return (
        <div className='container'>
            <h1 className='text-center mt-2 mb-5'>Just For You</h1>
            <div data-aos="fade-up" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 sm-g-5 justify-content-center">
                {
                    products.slice(0, 6).map(product =>
                        <div key={product._id} className="card p-2 mx-3 cards" >
                            <div className='img-bg' >
                                <img className='w-100 mb-2 zoom' src={product.pic} alt="" />
                            </div>
                            <ul style={{ listStyle: 'none' }}>
                                <li><h5>{product.pName}</h5></li>
                                <li>$ {product.price}</li>
                                <li>{product.qt}</li>
                                <li>{product.sName}</li>
                                <li>{product.desc}</li>
                            </ul>
                            <button onClick={() => navigate(`/update-quantity/${product._id}`)} className='btn btn-outline-info'>Stock Update <BsArrowUpCircle /></button>

                        </div>
                    )
                }
            </div>
            <div className='text-center mt-3 mb-5 h4'>
                <Link to='/all-product'>See More Products</Link>
            </div>
        </div>
    );
};

export default SupplyProduct;