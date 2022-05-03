import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
const AddItems = () => {
    return (
        <div className='container '>
            <div className='text-center mt-3'>
            <Link className='btn btn-info mb-2 mx-auto text-white' to={'/all-product'}>Check All Item</Link>
            <h2>Add Your Best Product</h2>
            </div>
            <div className='mt-3'>
                <Form className='w-50 mx-auto'>

                    <Form.Group className="mb-2" >
                        <Form.Control type="text" placeholder="Your Product Name" required />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Control type="text" placeholder="Product image URL" />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Control type="file" placeholder="Product image URL" />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Control type="number" placeholder="Product Price" required />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Control type="number" placeholder="Product Quantity" required />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Control type="text" placeholder="Supplier Name" required />
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