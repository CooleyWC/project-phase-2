import { useEffect, useState} from 'react';
import Header from './Header';
import {Outlet, useNavigate} from 'react-router-dom'

import './index.css'


const initialState = {
  "title": "",
  "answer": "",
  "category": "",
  "difficulty": "",
  "code": "./logo192.png",
  "review": false
}


function App() {
  const URL = 'http://localhost:3001/questions'

  const [questionData, setQuestionData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [formData, setFormData] = useState(initialState);
  const [titleInput, setTitleInput] = useState('');
  const [answerInput, setAnswerInput] = useState('');
  const [categorySelect, setCategorySelect] = useState('');
  const [difficultySelect, setDifficultySelect] = useState('');
  const [imageInput, setImageInput] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(URL)
    .then(res=>res.json())
    .then((data)=>{
      setQuestionData(data);
      setIsLoaded(!isLoaded);
    })
    .catch(error=>console.log(error))
  }, [])

  if(!isLoaded){return <h1>...Loading</h1>}

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
          "code": "./logo192.png",
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
          setQuestionData(prevValue=>([...prevValue, newItem]))
          setTitleInput('')
          setAnswerInput('')
          setFormData(initialState)
          navigate('/');
      })
  }

  const handleReviewClick = (e, obj)=>{
    e.stopPropagation()

    fetch(`http://localhost:3001/questions/${obj.id}`, {
        method: "PATCH", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            review: !obj.review,
        })
    })
    .then(res=>res.json())
    .then((updatedQuestion)=>{
        handleQuestionUpdate(updatedQuestion)
    })

}

  const handleQuestionUpdate= (updatedQuestion)=>{
    const updatedQuestions = questionData.map((question)=>{
      if(question.id === updatedQuestion.id){
        return updatedQuestion
      } else {
        return question
      }
    });
    setQuestionData(updatedQuestions)
  }


  return (
    <div className="App">
      <Header />
      <Outlet context={{
        questionData, setQuestionData,
        isLoaded, setIsLoaded,
        URL,
        titleInput, handleTitleInput,
        answerInput, handleAnswerInput,
        categorySelect, setCategorySelect,
        difficultySelect, setDifficultySelect,
        imageInput, setImageInput,
        handleSubmit,
        handleReviewClick,
        handleQuestionUpdate 
        }}
        />
    </div>
  );
}

export default App;
