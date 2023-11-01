import React from 'react';
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard';


const ReviewPage = () => {
    const {questionData, handleReviewClick} = useOutletContext();
    
    const reviewQuestions = questionData.filter((question)=>{
        return question.review === true
    })

    console.log(reviewQuestions)

    const reviewListings = reviewQuestions.map((question)=>{
        return <QuestionCard 
        key={question.id}
        questionId={question.id} 
        questionTitle={question.title}
        questionAnswer={question.answer}
        questionImage={question.code}
        handleReviewClick={handleReviewClick}
        questionObj={question}
        />
    })

    return (
        <div>
            <h1>Review Page</h1>
            {reviewListings}
        </div>
    );
};

export default ReviewPage;