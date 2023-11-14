import React, {useState} from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { InputLabel, Typography, Container, TextField, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Form = () => {
    const {onAddNewQuestion, URL} = useOutletContext();
    const [titleInput, setTitleInput] = useState('');
    const [answerInput, setAnswerInput] = useState('');
    const [categorySelect, setCategorySelect] = useState('');
    const [difficultySelect, setDifficultySelect] = useState('');
    const [imageInput, setImageInput] = useState('./logo192.png');
    const navigate = useNavigate();


    const handleTitleInput = (e)=>{
        if(e.target.value.length<=75){
          setTitleInput(e.target.value)
        }
      }
    
      const handleAnswerInput = (e)=>{
        if(e.target.value.length<=1050){
          setAnswerInput(e.target.value)
        }
      }
    
      const handleSubmit = (e) =>{
          e.preventDefault()
          const newQuestion = {
              "title": titleInput,
              "answer": answerInput,
              "category": categorySelect,
              "difficulty": difficultySelect,
              "code": imageInput,
              "review": false
          }
    
          fetch(URL, {
              method: "POST",
              headers: {
                  "Content-type": "application/json"
              },
              body: JSON.stringify(newQuestion)
          })
          .then(res=>res.json())
          .then((newItem)=>{
            onAddNewQuestion(newItem)
            setTitleInput('')
            setAnswerInput('')
            setCategorySelect('')
            setDifficultySelect('')
            navigate('/');
          })
      }

    return (
        <Container>
            <Box>
                <div>
                <Typography variant='h3' className='form'>Form</Typography>
                <form onSubmit={handleSubmit} className='form'>
                    <Box mb={2}>
                        <InputLabel sx={{color: '#cccccc'}}>Question Input</InputLabel>
                        <TextField 
                            sx={{width:'100%'}} 
                            multiline 
                            rows={4} 
                            name='question-input' 
                            placeholder='Enter question (limit 75 characters)' 
                            value={titleInput} 
                            onChange={handleTitleInput}
                        />
                    </Box>
                    <Box mb={2}>
                        <InputLabel sx={{color: '#cccccc'}}>Question Answer</InputLabel>
                        <TextField 
                            sx={{width:'100%'}} 
                            multiline rows={8} 
                            name='answer-input' 
                            placeholder='Enter answer (limit 1050 characters)' 
                            value={answerInput} 
                            onChange={handleAnswerInput}
                        />
                    </Box>
                    <Box display='flex' flexDirection='row' alignItems='center' mb={2}>
                        <Box display='flex' flexDirection='column' alignItems='left'>
                            <InputLabel sx={{color: '#cccccc'}}>Question Category</InputLabel>
                                <Select 
                                    sx={{ width: '350px', marginRight: '8px'}} 
                                    value={categorySelect} 
                                    onChange={(e)=>setCategorySelect(e.target.value)}
                                >
                                    <MenuItem value=''>--Select a Category--</MenuItem>
                                    <MenuItem value='jsx'>JSX</MenuItem>
                                    <MenuItem value='components-props'>Components-Props</MenuItem>
                                    <MenuItem value='state'>State</MenuItem>
                                    <MenuItem value='router'>Router</MenuItem>
                                </Select>
                        </Box>
                        <Box display='flex' flexDirection='column' alignItems='left'>
                            <InputLabel sx={{color: '#cccccc'}}>Question Difficulty</InputLabel>
                                <Select  
                                    sx={{ width: '350px', marginRight: '8px'}} 
                                    value={difficultySelect} 
                                    onChange={(e)=>{setDifficultySelect(e.target.value)}}
                                >
                                    <MenuItem value=''>--Select a Difficulty Level</MenuItem>
                                    <MenuItem value='easy'>Easy</MenuItem>
                                    <MenuItem value='medium'>Medium</MenuItem>
                                    <MenuItem value='advanced'>Advanced</MenuItem>
                                </Select>
                        </Box>
                        <Box display='flex' flexDirection='column' alignItems='left'>
                            <InputLabel sx={{color: '#cccccc'}}>Code Image (optionial)</InputLabel>
                            <TextField  
                                sx={{ width: '350px', marginRight: '8px'}} 
                                type='text' 
                                placeholder='Enter code image' 
                                value={imageInput} 
                                onChange={(e)=>{setImageInput(e.target.value)}}/>
                        </Box>
                        </Box>
                            <Box textAlign='center'>
                                <Button type='submit' variant='contained' size='large' color='secondary'>
                                    Submit
                                </Button>
                        </Box>    
                    </form>
                </div>
            </Box>
        </Container>
    );
};

export default Form;