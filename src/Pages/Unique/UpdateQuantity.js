import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form'
const UpdateQuantity = () => {
    const { id } = useParams()
    const [products, setProduct] = useState({})
    const [number, setNumber] = useState(1)
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        // const url = `https://secret-eyrie-28226.herokuapp.com/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [products])

    const deliver = (id) => {
        //send data
        const { dist } = products.qt
        const cQuantity = dist - number
        setNumber(cQuantity)
        console.log(number);
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ number })
        })
            .then(res => res.json())
            .then(data => console.log(data))
        alert('Delivered Product')
    }
    return (
        <div>
            <div>
                <img className="w-25" src={products.pic} alt="" />
                <h1>Product Name : {products.pName}</h1>
                <h1>Supplier : {products.sName}</h1>
                <p>Price : {products.price}</p>
                <p>Quantity : {products.qt}</p>
                <button onClick={() => deliver(products._id)}>Delivered</button>{/* decrease one */}
            </div>

            <Link to='/all-product'>Go Manage Product</Link>
            <Form className='w-50 mx-auto'>{/* increase */}
                <Form.Group className="mb-2" >
                    <Form.Control type="number" placeholder="Product Quantity" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit Product
                </Button>
            </Form>
        </div>
    );
};

export default UpdateQuantity;