import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaCheck } from "react-icons/fa";
import Swal from 'sweetalert2';
const AllTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/allTasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [update])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteATask/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = tasks.filter(task => task._id !== id);
                            setTasks(remaining);
                        }
                    })
            }
        })
    }

    const handleUpdate = id => {
        fetch(`http://localhost:5000/updateATask/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    if (update === 0) {
                        setUpdate(1);
                    } else {
                        setUpdate(0);
                    }
                }
            })
    }
    return (
        <div>
            {
                tasks.map(task =>
                    <div key={task._id} className="card my-4 card-compact w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-lg md:text-2xl font-bold p-2">{task.title}</h2>
                            <div className='md:text-lg'>
                                {
                                    task.details.length < 200 ? task.details :
                                        <div>{task.details.slice(0, 200)} <br />
                                            <p className='text-end'>
                                                <Link to={`/seeMore/${task._id}`} className='text-blue-600 underline'>read more</Link>
                                            </p>
                                        </div>
                                }
                            </div>
                            <hr />
                            <div className='flex justify-between items-center p-4'>
                                <button onClick={() => handleUpdate(task._id)}><p className='text-[16px]'>{task.status === "Incomplete" ? "mark as completed" : <FaCheck className='text-info' size={20}></FaCheck>}</p></button>
                                <button onClick={() => handleDelete(task._id)}> <FaTrash className='text-red-500' size={20}></FaTrash> </button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default AllTasks;