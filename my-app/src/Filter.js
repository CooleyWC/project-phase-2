import { Container, TextField, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Filter = ({handleCategoryFilter, filteredQuestions, handleDifficultyFilter, difficultyFilter, search, handleSearchChange}) => {

    return (
        <div>
            <Container>
            <Typography variant='h4' className='filter'>Filter</Typography>
            <Box   sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}>
          
            <InputLabel sx={{color: '#cccccc'}}>Category</InputLabel>
                <Select  onChange={handleCategoryFilter} value={filteredQuestions}>
                    <MenuItem value='all'>--Select a Category--</MenuItem>
                    <MenuItem value='jsx'>JSX</MenuItem>
                    <MenuItem value='components-props'>Components-Props</MenuItem>
                    <MenuItem value='state'>State</MenuItem>
                    <MenuItem value='router'>Router</MenuItem>
                </Select>
       
       
            <InputLabel sx={{color: '#cccccc'}}>Difficulty</InputLabel>
                <Select onChange={handleDifficultyFilter} value={difficultyFilter}>
                    <MenuItem value='all'>--Select a Difficulty Level</MenuItem>
                    <MenuItem value='easy'>Easy</MenuItem>
                    <MenuItem value='medium'>Medium</MenuItem>
                    <MenuItem value='advanced'>Advanced</MenuItem>
                </Select>
    
       
                <TextField id='outlined-basic' placeholder='search for question' onChange={handleSearchChange} value={search}/>
         
            </Box>
            </Container>
        </div>
   
    );
};

export default Filter;