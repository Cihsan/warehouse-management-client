import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { HiViewGridAdd } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../Common/Footer';
const AllProduct = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        // fetch('http://localhost:5000/products/')
        fetch('https://secret-eyrie-28226.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const deletebtn = id => {
        const ask = window.confirm('Are sure to delete')
        if (ask) {
            console.log(id)
            // const url=`http://localhost:5000/products/${id}`
            const url = `https://secret-eyrie-28226.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remaining = products.filter(product => product._id !== id)
                        setProduct(remaining)
                        toast('Product Deleted Form Here');
                    }
                })
        }
    }
    return (
        <div>
            <div className='container'>
                <ToastContainer />
                <h1 className='text-center mt-2 mb-2'>All Product List</h1>
                <div className='d-flex justify-content-between'>
                    <h2>Total Listed Product : {products.length}</h2>
                    <Link className='btn btn-outline-info mb-2' to={'/add-item'}><HiViewGridAdd /> Add New Item</Link>
                </div>
                <div className='row gy-3 gx-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 '>
                    {
                        products.map(product =>
                            <div className='card p-2 zoom'>
                                <div className="d-flex align-items-center">
                                    <img className='rounded-circle' width={'25%'} height={'50%'} src={product.pic} alt="" />
                                    <ul style={{ listStyle: 'none' }}>
                                        <li><h6>Product: {product.pName}</h6></li>
                                        <li><h6>Price: {product.price}</h6></li>
                                        <li><h6>Quantity: {product.qt}</h6></li>
                                        <li><h6>Sipplier: {product.sName}</h6></li>
                                        {/* <li><h6>Code: {product._id.slice(21, 25)}</h6></li> */}
                                    </ul>
                                </div>
                                <div className=''>
                                    <button onClick={() => deletebtn(product._id)} className='btn btn-outline-danger w-100 '><FaTrashAlt /> Delete</button>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProduct;