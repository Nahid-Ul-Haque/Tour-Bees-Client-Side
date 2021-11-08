import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [users, setusers] = useState([])
    useEffect(() => {
        fetch('https://frightful-ghoul-79837.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setusers(data))
    }, [])

    //Delete an User
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete??');
        if (proceed) {
            const url = `http://localhost:5000/deletedOffers/${id}`
            fetch(url, {
                method: 'DELETE'
            })

                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deletd successfully');
                        const remainingUser = users.filter(user => user._id !== id)
                        setusers(remainingUser);
                    }
                })
        }
    }
    return (
        <div>
            <h2>Users Available : {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >
                        {user.name} :: {user.email}
                        <Link to={`/users/update/${user._id}`}> <button>Update</button> </Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default ManageAllOrders;