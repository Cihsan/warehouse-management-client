import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()
const FeatureOne = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('https://pure-ridge-54487.herokuapp.com/home')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='container'>
            <div className="">
                {
                    products.slice(11, 12).map(item => <div className=' d-flex card p-3 mt-3' key={item._id}>
                        <div className='align-items-center'>
                            <img className='w-25 zoom mb-2' src={item.pic} alt="" />
                            <ul style={{ listStyle: 'none' }}>
                                <li><h5>{item.pName}</h5></li>
                            </ul>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeatureOne;