import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddTask = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useTitle('Add task')

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://server-side-two-ashy.vercel.app/addTasks', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Your task has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    return (
        <div className='px-4 md:w-2/3 mx-auto shadow-xl rounded-lg mt-12'>
            <h1 className='text-center font-medium text-3xl my-8'>Add Your Task</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                    {...register("title", { required: true })}
                    placeholder="Title"
                    className="input input-bordered input-info w-full"
                    aria-invalid={errors.title ? "true" : "false"}
                />
                {errors.title?.type === 'required' && <p className='text-red-500'>Title is required</p>}

                <textarea
                    {...register("details", { required: true })}
                    className="textarea textarea-info w-full h-56 my-4"
                    placeholder="Details"
                    aria-invalid={errors.details ? "true" : "false"}
                ></textarea>
                {errors.details?.type === 'required' && <p className='text-red-500'>Details is required</p>}

                <input type="text" {...register("status")} value="Incomplete" readOnly className="input input-bordered input-sm mt-4" />
                <br />

                <button className="btn w-full my-6">
                    <input type="submit" />
                </button>
            </form>
        </div>
    );
};

export default AddTask;