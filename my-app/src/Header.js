import React from 'react';
import NavBar from './NavBar';
import {Typography} from '@mui/material'

const Header = () => {
    return (
        <div className='header'>
            <NavBar />
            <Typography variant="h1">React Study Guide</Typography>
        </div>
    );
};

export default Header;