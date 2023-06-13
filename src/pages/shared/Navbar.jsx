import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const list = <>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/addTask">Add Task</NavLink></li>
    </>

// className={({ isActive }) => (isActive ? 'active' : '')}

    return (
        <div className="navbar bg-info rounded sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="z-10 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            list
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Knowledge</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-x-4 menu-horizontal px-1">
                    {
                        list
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;