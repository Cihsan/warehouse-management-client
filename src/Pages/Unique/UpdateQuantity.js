import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UpdateQuantity = () => {
    const {id}=useParams()
    const [products,setProduct]=useState({})
    console.log(products.pName);
    useEffect(()=>{
        const url=`http://localhost:5000/products/${id}`
        // const url=`https://secret-eyrie-28226.herokuapp.com/products/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[products])
    return (
        <div>
           <h1>id</h1>
           <Link to='/all-product'>Go Manage Product</Link>
        </div>
    );
};

export default UpdateQuantity;