import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const [myOrder, setMyOrder] = useState([])
    const [deleteOrder, setDeleteOrder] = useState(false)
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://frightful-ghoul-79837.herokuapp.com/offers?email=${user.email}`)
            .then(res => res.json())
            .then(data => {

                setMyOrder(data)
            })
    }, [deleteOrder])


    const handleOrderDelete = id => {
        const url = `https://frightful-ghoul-79837.herokuapp.com/deletedOrder/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.confirm('Are you sure to delete this order?')
                    setDeleteOrder(data)
                }
            })
    }
    return (
        <div>
            <h1 className='text-center mb-4'>You have placed {myOrder.length} order</h1>
            <div>
                {
                    myOrder.map(myOrder =>
                        <div key={myOrder._id} className='orderDesign'>
                            <p className='text-danger'>{myOrder?.createdAt}</p>
                            <h4>{myOrder?.email}</h4>
                            <p>{myOrder?.adress}</p>
                            <button onClick={() => handleOrderDelete(myOrder._id)} className="btn btn-design" type="button">Delete</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;