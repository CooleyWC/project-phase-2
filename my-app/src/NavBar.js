import React from 'react';
import {NavLink} from 'react-router-dom';
import { Breadcrumbs, CssBaseline } from '@mui/material';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <CssBaseline />
                <Breadcrumbs aria-label="breadcrumb">
                    <NavLink className='nav-link' to='/' > Home</NavLink>
                    <NavLink className='nav-link' to='/question/new'> Form</NavLink>
                    <NavLink className='nav-link' to='/review'> Review</NavLink>
                </Breadcrumbs>
        </nav>
    );
};

export default NavBar;