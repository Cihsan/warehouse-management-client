import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import auth from '../../Spacial/firebase_init';

const MyItems = () => {
    const [items, setItem] = useState([])
    console.log(items);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `https://pure-ridge-54487.herokuapp.com/my-items`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [user.email])

    const deletebtn = id => {
        const ask = window.confirm('Are sure to delete')
        if (ask) {
            console.log(id)
            const url = `https://pure-ridge-54487.herokuapp.com/my-items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remaining = items.filter(item => item._id !== id)
                        setItem(remaining)
                        toast('Product Deleted Form Here');
                    }
                })
        }
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Your Total Added Porduct : {items.length}</h1>
            <div className="row row-cols-3">
                {
                    items.map(item => <div className='card p-3 zoom' key={item._id} data-aos="zoom-in">
                        <div className='d-flex align-items-center'>
                            <img className='w-50' src={item.pic} alt="" />
                            <ul style={{ listStyle: 'none' }}>
                                <li><h5>{item.pName}</h5></li>
                                <li>$ {item.price}</li>
                                <li>Q {item.qt}</li>
                                <li>S {item.sName}</li>
                                <li>C {item._id.slice(21, 25)}</li>
                                <li><button className='btn btn-danger mt-2' onClick={() => deletebtn(item._id)}>Delete <FaTrashAlt /></button></li>
                            </ul>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;