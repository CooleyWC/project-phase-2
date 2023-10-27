import React from 'react';
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard';

const QuestionList = () => {
    const {questionData, setQuestionData, isLoaded, setIsLoaded,} = useOutletContext();

    const questionListings = questionData.map((question)=>{
        return <QuestionCard 
        key={question.id} 
        questionTitle={question.title}
        questionAnswer={question.answer}
        questionImage={question.code}
        />
    })

    return (
        <div>
            {questionListings}
        </div>
    );
};

export default QuestionList;