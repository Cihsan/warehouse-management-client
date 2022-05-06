import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyItems = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/my-item')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center'>Your Total Added Porduct : {items.length}</h1>
            <div className="row row-cols-3">
                {
                    items.map(item => <div className='card p-3' key={item._id}>
                        <div className='d-flex align-items-center'>
                            <img className='w-50' src={item.pic} alt="" />
                            <ul style={{ listStyle: 'none' }}>
                                <li><h5>{item.pName}</h5></li>
                                <li>$ {item.price}</li>
                                <li>Q {item.qt}</li>
                                <li>S {item.sName}</li>
                                <li>C {item._id.slice(21, 25)}</li>
                                <li><button className='btn btn-danger mt-2'>Delete <FaTrashAlt/></button></li>
                            </ul>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;