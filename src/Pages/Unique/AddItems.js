import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import { ToastContainer, toast } from 'react-toastify';
import { BsArrowRightCircle } from 'react-icons/bs';
import Button from 'react-bootstrap/esm/Button';
import auth from '../../Spacial/firebase_init';
import { useAuthState } from 'react-firebase-hooks/auth';
const AddItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const addItem = (event) => {
        event.preventDefault()
        const pName = event.target.pName.value
        const price = event.target.price.value
        const qt = event.target.qt.value
        const sName = event.target.sName.value
        const pic = event.target.pic.value
        const desc = event.target.desc.value
        const product = { pName, qt, price, sName, pic, desc }
        console.log(product);

        const url = `https://secret-eyrie-28226.herokuapp.com/products`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your Product Successfully Added');
                console.log(data);
            })
        event.preventDefault()
        event.target.reset()

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
            {errorMassage}
            <div className='text-center mt-3'>
                <h2>Add Your Best Product</h2>
            </div>
            <div className='container'>
            <Form onSubmit={addItem} className='row col row-cols-md-3 row-cols-sm-2'>
                <Form.Group className="mb-2" >
                <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" name='pName' placeholder="Your Product Name" required />
                </Form.Group>
                <Form.Group className="mb-2" >
                <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name='price' placeholder="Product Price" required />
                </Form.Group>
                <Form.Group className="mb-2" >
                <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name='qt' placeholder="Product Quantity" required />
                </Form.Group>
                <Form.Group className="mb-2" >
                <Form.Label>image URL</Form.Label>
                    <Form.Control type="text" name='pic' placeholder="Product image URL" />
                </Form.Group>
                <Form.Group className="mb-2" >
                <Form.Label>Supplier</Form.Label>
                    <Form.Control type="text" name='sName' placeholder="Supplier Name" required />
                </Form.Group>
                <Form.Group className="mb-2" >
                <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name='desc' placeholder="Product Description" required />
                </Form.Group>
                <Button className='w-100 mt-2' variant="primary" type="submit">
                    Submit Product
                </Button>
            </Form>
            </div>

            <div className='d-flex justify-content-between mt-3'>
                <Link className='btn btn-outline-primary' to={'/all-product'}>Check All Item <BsArrowRightCircle /></Link>
                <Link className='btn btn-outline-primary ms-2' to={'/my-item'}>Check Your Items <BsArrowRightCircle /></Link>
            </div>
        </div>
    );
};

export default AddItems;