import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
const AddItems = () => {

    const addItem = (event) => {
        const pName = event.target.pName.value
        const pic = event.target.pic.value
        const price = event.target.price.value
        const qt = event.target.qt.value
        const sName = event.target.sName.value
        const product={pName,pic,price,qt,sName}
        const url = `http://localhost:5000/products`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        alert('Product Added')
        event.target.reset()
        event.preventDefault()
    }
    return (
        <div className='container '>
            <div className='text-center mt-3'>
                <Link className='btn btn-info mb-2 mx-auto text-white' to={'/all-product'}>Check All Item</Link>
                <h2>Add Your Best Product</h2>
            </div>
            <div className='mt-3'>
                <Form onSubmit={addItem} className='w-50 mx-auto'>

                    <Form.Group className="mb-2" >
                        <Form.Control type="text" name='pName' placeholder="Your Product Name" required />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Control type="text" name='pic' placeholder="Product image URL" />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Control type="number" name='price' placeholder="Product Price" required />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Control type="number" name='qt' placeholder="Product Quantity" required />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Control type="text" name='sName' placeholder="Supplier Name" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit Product
                    </Button>
                </Form>

            </div>

        </div>
    );
};

export default AddItems;