import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink to='/' > Home</NavLink>
            <NavLink to='/question/new'> Form</NavLink>
            <NavLink to='/review'> Review</NavLink>
            <NavLink to='/resources'> Resources</NavLink>
        </div>
    );
};

export default NavBar;