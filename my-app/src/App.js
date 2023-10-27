import { useEffect, useState } from 'react';
import Header from './Header';
import {Outlet} from 'react-router-dom'

import './index.css'

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

  return (
    <div className="App">
      <Header />
      <Outlet context={{
        questionData, 
        setQuestionData,
        isLoaded,
        setIsLoaded,
        URL 
        }}
        />
    </div>
  );
}

export default App;
