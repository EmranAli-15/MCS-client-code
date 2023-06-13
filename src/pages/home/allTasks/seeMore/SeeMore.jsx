import React, { useEffect } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const SeeMore = () => {
    const data = useLoaderData();
    const { title, details } = data;

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useTitle('Details')

    return (
        <div>
            <div className='my-12'>
                <h1 className='text-lg md:text-3xl font-bold'>{title}</h1>
                <p className='text-lg ml-2 mt-4'>{details}</p>
            </div>
            <div className='text-center'>
                <button className='btn btn-info'>
                    <Link to="/">Go back</Link>
                </button>
            </div>
        </div>
    );
};

export default SeeMore;