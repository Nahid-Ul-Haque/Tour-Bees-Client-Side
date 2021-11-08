import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewOffer.css'

const AddNewOffer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://frightful-ghoul-79837.herokuapp.com/addoffers', data)
            .then(res => {
                console.log(res);

                if (res?.data?.insertedId) {
                    alert('Successfully Added an Service')
                    reset();
                }
            })

    };
    return (
        <div className='add-services'>
            <h1 className='text-center my-4'>Please Add a Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("img")} placeholder="Image URL" />
                <textarea {...register("description")} placeholder="Description" />
                <textarea {...register("brand")} placeholder="Brand" />
                <textarea {...register("offer")} placeholder="Offer" />
                <textarea {...register("price")} placeholder="Price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewOffer;