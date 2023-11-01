import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Form = () => {
    const {titleInput, handleTitleInput, answerInput, handleAnswerInput, categorySelect, 
        setCategorySelect, difficultySelect, setDifficultySelect, imageInput, setImageInput, handleSubmit} = useOutletContext();


    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <textarea name='question-input' placeholder='Enter question (limit 75 characters)' value={titleInput} onChange={handleTitleInput}/>
                <textarea name='answer-input' placeholder='Enter answer (limit 1050 characters)' value={answerInput} onChange={handleAnswerInput}/>
                <label>
                    <select value={categorySelect} onChange={(e)=>setCategorySelect(e.target.value)}>
                        <option value=''>--Select a Category--</option>
                        <option value='jsx'>JSX</option>
                        <option value='components-props'>Components-Props</option>
                        <option value='state'>State</option>
                        <option value='router'>Router</option>
                    </select>
                </label>
                <label>
                    <select  value={difficultySelect} onChange={(e)=>{setDifficultySelect(e.target.value)}}>
                        <option value=''>--Select a Difficulty Level</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='advanced'>Advanced</option>
                    </select>
                </label>
                <input type='text' placeholder='Enter code image' value={imageInput} onChange={(e)=>{setImageInput(e.target.value)}}/>
                <input type='submit' placeholder='Submit' />
            </form>
        </div>
    );
};

export default Form;