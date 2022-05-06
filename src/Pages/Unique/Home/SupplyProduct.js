import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../assets/Style/SupplyProduct.css'
import { BsArrowUpCircle } from 'react-icons/bs';

const SupplyProduct = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        // fetch('http://localhost:5000/products/')
        fetch('https://secret-eyrie-28226.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const navigate = useNavigate()
    return (
        <div className='container'>
            <h1 className='text-center mt-2 mb-5'>Just For You</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 sm-g-5 justify-content-center">
                {
                    products.slice(0, 6).map(product =>
                        <div key={product._id} className="card p-2 mx-3 cards ">
                            <img className='w-100 mb-2' src={product.pic} alt="" />
                            <ul style={{ listStyle: 'none' }}>
                                <li><h5>{product.pName}</h5></li>
                                <li>$ {product.price}</li>
                                <li>{product.qt}</li>
                                <li>{product.sName}</li>
                            </ul>
                            <button onClick={() => navigate(`/update-quantity/${product._id}`)} className='btn btn-outline-info'>Stock Update <BsArrowUpCircle /></button>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SupplyProduct;