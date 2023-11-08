import { Container, TextField, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Filter = ({handleCategoryFilter, filteredQuestions, handleDifficultyFilter, difficultyFilter, search, handleSearchChange}) => {

    return (
        <div>
            <Container>
            <Typography variant='h4' className='filter' style={{paddingTop: '14px', paddingBottom: '14px'}}>Filter</Typography>
            <Box   sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '20px', }}>
          
                <Select  onChange={handleCategoryFilter} value={filteredQuestions} sx={{marginRight: '8px'}}>
                    <MenuItem value='all'>--Select a Category--</MenuItem>
                    <MenuItem value='jsx'>JSX</MenuItem>
                    <MenuItem value='components-props'>Components-Props</MenuItem>
                    <MenuItem value='state'>State</MenuItem>
                    <MenuItem value='router'>Router</MenuItem>
                </Select>
       
                <Select onChange={handleDifficultyFilter} value={difficultyFilter} sx={{marginRight: '8px'}}>
                    <MenuItem value='all'>--Select a Difficulty Level</MenuItem>
                    <MenuItem value='easy'>Easy</MenuItem>
                    <MenuItem value='medium'>Medium</MenuItem>
                    <MenuItem value='advanced'>Advanced</MenuItem>
                </Select>
    
       
                <TextField style={{color: '#cccccc'}} id='outlined-basic' placeholder='search for question' onChange={handleSearchChange} value={search}/>
         
            </Box>
            </Container>
        </div>
   
    );
};

export default Filter;