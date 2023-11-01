import React, {useState} from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

// const initialState = {
//     "title": "",
//     "answer": "",
//     "category": "",
//     "difficulty": "",
//     "code": "./logo192.png",
//     "review": false
//   }
  

const Form = () => {
    const {onAddNewQuestion, URL} = useOutletContext();


    // const [formData, setFormData] = useState(initialState);
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
          console.log(newQuestion)
    
          fetch(URL, {
              method: "POST",
              headers: {
                  "Content-type": "application/json"
              },
              body: JSON.stringify(newQuestion)
          })
          .then(res=>res.json())
          .then((newItem)=>{
            console.log(newItem)
                onAddNewQuestion(newItem)
              setTitleInput('')
              setAnswerInput('')
            //   setFormData(initialState)
              navigate('/');
          })
      }

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