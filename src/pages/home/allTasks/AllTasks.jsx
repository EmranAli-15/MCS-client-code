import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allTasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div>
            {
                tasks.map(task =>
                    <div key={task._id} className="card my-4 card-compact w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="md:text-2xl font-bold p-2">{task.title}</h2>
                            <div className='text-lg'>
                                {
                                    task.details.length < 200 ? task.details :
                                        <div>{task.details.slice(0, 200)} <br />
                                            <p className='text-end'>
                                                <Link to={`/seeMore/${task._id}`} className='text-blue-600 underline'>read more</Link>
                                            </p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default AllTasks;