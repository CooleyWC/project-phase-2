import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';


const initialState = {
    "title": "",
    "answer": "",
    "category": "",
    "difficulty": "",
    "code": "./logo192.png",
    "review": false
}

const Form = () => {
    const {questionData} = useOutletContext();
 
    const [formData, setFormData] = useState(initialState);
    const [titleInput, setTitleInput] = useState('');
    const [answerInput, setAnswerInput] = useState('');
    const [categorySelect, setCategorySelect] = useState('');
    const [difficultySelect, setDifficultySelect] = useState('');
    const [imageInput, setImageInput] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault()
        const newQuestion = {
            "title": titleInput,
            "answer": answerInput,
            "category": categorySelect,
            "difficulty": difficultySelect,
            "code": "./logo192.png",
            "review": false
        }
        console.log(newQuestion)
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='enter question' value={titleInput} onChange={(e)=>{setTitleInput(e.target.value)}}/>
                <input type='text' placeholder='enter answer' value={answerInput} onChange={(e)=>{setAnswerInput(e.target.value)}}/>
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