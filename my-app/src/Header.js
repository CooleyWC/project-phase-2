import React from 'react';
import NavBar from './NavBar';
import {Typography, Container} from '@mui/material'

const Header = () => {
    return (
        <Container sx={{backgroundColor: '#6a5acd', paddingBottom: '32px'}} className='header'>
            <NavBar />
            <Typography variant="h2" style={{marginTop: '32px'}} gutterBottom>React Study Guide</Typography>
        </Container>
    );
};

export default Header;