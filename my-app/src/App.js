import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [questionData, setQuestionData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:3001/questions')
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
      <h1>Project</h1>
    </div>
  );
}

export default App;
