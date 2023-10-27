import React from 'react';
import { useOutletContext } from 'react-router-dom';

const QuestionList = () => {
    const {questionData, setQuestionData, isLoaded, setIsLoaded,} = useOutletContext();
    
    return (
        <div>
            <h1>Question List</h1>
        </div>
    );
};

export default QuestionList;