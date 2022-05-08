import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { BsArrowRightCircle } from 'react-icons/bs';
import auth from '../../Spacial/firebase_init';
import { useAuthState } from 'react-firebase-hooks/auth';
const AddItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const addItem = (event) => {
        const pName = event.target.pName.value
        const price = event.target.price.value
        const qt = event.target.qt.value
        const sName = event.target.sName.value
        const pic = event.target.pic.value
        const desc = event.target.desc.value
        const product = { pName, qt, price, sName, pic, desc }
        const url = `http://localhost:5000/products`
        fetch(url, {
            method: 'POST',
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("cToken")}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast('Your Product Successfully Added');
        event.target.reset()
        event.preventDefault()
    }
    let spinner;
    if (loading) {
        spinner = <div class="d-flex align-items-center text-info">
            <strong>Loading...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    }
    let errorMassage
    if (error) {
        errorMassage = <small className='text-danger border border-primary p-2 mt-5'>
            {error?.message}
        </small>
    }
    return (
        <div className='container '>
            <ToastContainer />
            {spinner}
            <div className='text-center mt-3'>
                <h2>Add Your Best Product</h2>
            </div>
            <div className='mt-3'>
                <form onSubmit={addItem} className="row g-3">

                    <div className="col-md-4">
                        <label className="form-label border-bottom border-secondary">Product Name</label>
                        <input type="text" className="form-control" name='pName' placeholder="Your Product Name" required />
                    </div>

                    <div className="col-md-2">
                        <label className="form-label border-bottom border-secondary">Price</label>
                        <div className="input-group ">
                            <span className="input-group-text">$</span>
                            <input type="number" className="form-control" name='price' placeholder="Product Price" required />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <label className="form-label border-bottom border-secondary">Quantity</label>
                        <div className="input-group ">
                            <input className="form-control" type="number" name='qt' placeholder="Product Quantity" required />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label border-bottom border-secondary">Supplier</label>
                        <div className="input-group ">
                            <input className="form-control" type="text" name='qt' placeholder="Supplier Name" required />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label border-bottom border-secondary">Image URL</label>
                        <input type="text" className="form-control" name='pic' placeholder="Product image URL" required />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label border-bottom border-secondary">Description</label>
                        <input type="text" className="form-control" name='desc' placeholder="Product Description" required />
                    </div>

                    <div className="col-12">
                        <button className="btn btn-outline-info w-100" type="submit">Submit Product</button>
                    </div>
                </form>
                {errorMassage}
            </div>
            <div className='d-flex justify-content-between mt-3'>
                <Link className='btn btn-outline-primary' to={'/all-product'}>Check All Item <BsArrowRightCircle /></Link>
                <Link className='btn btn-outline-primary ms-2' to={'/my-item'}>Check Your Items <BsArrowRightCircle /></Link>
            </div>
        </div>
    );
};

export default AddItems;