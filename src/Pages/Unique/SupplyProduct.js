import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SupplyProduct = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products/')
        // fetch('https://secret-eyrie-28226.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const navigate=useNavigate()
    return (
        <div className='container'>
            <h1 className='text-center mt-2 mb-2'>Just For You</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                {
                   products.slice(0,6).map(product=>
                        <div key={product._id} className="col card p-3">
                            <img className='w-100' src={product.pic} alt="" />                            
                            <p>{product.pName}</p>
                            <p>{product.price}</p>
                            <p>{product.qt}</p>
                            <p>{product.sName}</p>
                            <button onClick={()=>navigate(`/update-quantity/${product.id}`)} className='btn btn-info text-white'>Update Quantity</button>
                        </div>
                    )    }
            </div>
        </div>
    );
};

export default SupplyProduct;