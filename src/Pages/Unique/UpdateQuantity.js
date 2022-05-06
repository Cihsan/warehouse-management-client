import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineCarryOut } from 'react-icons/ai';

const UpdateQuantity = () => {
    const { id } = useParams()
    const [products, setProduct] = useState({})
    const [number, setNumber] = useState(0)
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        // const url = `https://secret-eyrie-28226.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [products])

    const deliver = (id) => {
        const {qt}=products
        const minus = parseInt(qt) - 1
        const up= qt-minus
        setNumber(up)
        console.log(number);
        const url = `http://localhost:5000/products/minus/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({number})
        })
            .then(res => res.json())
            .then(data => console.log(data))
        alert('Delivered Product')
    }
    const addQuantity = event => {
        const quantity = event.target.quantity.value
        const plusQuantity = [parseInt(quantity) + parseInt(products.qt)]
        const setQuantity = { plusQuantity }
        setProduct(setQuantity)
        console.log(setQuantity);
        const url = `http://localhost:5000/products/plus/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(setQuantity)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        alert('Added')
        event.target.reset()

    }
    return (
        <div className="container">
            <div>

                <div className="sm-d-flex-wrap d-flex justify-content-center align-items-center">
                    <img className="w-25" src={products.pic} alt="" />
                    <div className="mx-5">
                        <h3>Product Name : {products.pName}</h3>
                        <h4>Supplier : {products.sName}</h4>
                        <h4>Price : {products.price}</h4>
                        <div className="d-flex mb-3">
                            <h5>Quantity : {products.qt}</h5>
                            <form onSubmit={addQuantity} className='d-flex align-items-center'>{/* increase */}
                                <input className="form-control mx-4" type="number" name="quantity" width={'5'} placeholder="Product Quantity" required />
                                <input className="btn btn-info text-white" type="submit" value="Update Quantity" />
                            </form>
                        </div>
                        <button className="btn btn-success" onClick={() => deliver(products._id)}>Delivered <AiOutlineCarryOut /></button>{/* decrease one */}
                        <Link className="btn btn-link " to='/all-product'>Go Manage Product</Link>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default UpdateQuantity;