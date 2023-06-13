import React from 'react';
import { useForm } from "react-hook-form";

const AddTask = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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