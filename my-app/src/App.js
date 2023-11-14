import { useEffect, useState} from 'react';
import Header from './Header';
import {Outlet} from 'react-router-dom'

import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const URL = 'http://localhost:3001/questions'

  const [questionData, setQuestionData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


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


  const onAddNewQuestion = (newQuestion)=>{
    setQuestionData(prevValue=>([...prevValue, newQuestion]))
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
        URL,
        handleReviewClick,
        handleQuestionUpdate,
        onAddNewQuestion 
        }}
        />
    </div>
  );
}

export default App;
