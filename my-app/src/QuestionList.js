import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import Filter from './Filter';

const QuestionList = () => {
    const {questionData, setQuestionData, isLoaded, setIsLoaded,} = useOutletContext();
    const [filteredQuestions, setFilteredQuestions] = useState('all')
   


    const handleCategoryFilter = (e) =>{
        setFilteredQuestions(e.target.value);
    }

    const filteredCategories = questionData.filter((question)=>{
        if(filteredQuestions==='all'){
            return true
        } else {
        return question.category === filteredQuestions
        }
    })

    const questionListings = filteredCategories.map((question)=>{
        return <QuestionCard 
        key={question.id}
        questionId={question.id} 
        questionTitle={question.title}
        questionAnswer={question.answer}
        questionImage={question.code}
        />
    })

    return (
        <div>
            <Filter handleCategoryFilter={handleCategoryFilter} filteredQuestions={filteredQuestions}/>
            {questionListings}
        </div>
    );
};

export default QuestionList;