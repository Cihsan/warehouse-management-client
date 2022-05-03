import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
const AllProduct = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products/')
        // fetch('https://secret-eyrie-28226.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const deletebtn=id=>{
        const ask= window.confirm('Are sure to delete')
        if(ask){
            console.log(id)
            const url=`http://localhost:5000/products/${id}`
            // const url=`https://secret-eyrie-28226.herokuapp.com/products/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    console.log('deleted')
                    const remaining=products.filter(product=>product._id !==id)
                    setProduct(remaining)
                }
            })
        }
    }
    return (
        <div className='container'>
            <h1 className='text-center mt-2 mb-2'>All Product List</h1>
            <div className='d-flex justify-content-between'>
            <h2>Total Listed Product : {products.length}</h2>
            <Link className='btn btn-success mb-2' to={'/add-item'}>Add New Item</Link>

            </div>
            <Table className='text-center' responsive="sm" striped bordered hover variant="info">

                <thead>
                    <tr>
                        <th>id</th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qt.</th>
                        <th>Supplier</th>
                        <th>Option</th>
                    </tr>
                </thead>
                {
                    products.map(product =>
                        <tbody>
                            <tr>
                                <td>{product._id.slice(21,25)}</td>
                                <td><img width={'50'} src={product.pic} alt="" /></td>
                                <td>{product.pName}</td>
                                <td>{product.price}</td>
                                <td>{product.qt}</td>
                                <td>{product.sName}</td>
                                <td>
                                    <button onClick={()=>deletebtn(product._id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default AllProduct;