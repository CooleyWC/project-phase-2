import { Container, Typography,} from '@mui/material';
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
        return (
        <div key={question.id} style={{marginBottom: '20px'}}>
        <QuestionCard 
        key={question.id}
        questionId={question.id} 
        questionTitle={question.title}
        questionAnswer={question.answer}
        questionImage={question.code}
        handleReviewClick={handleReviewClick}
        questionObj={question}
        />
        </div>
        )
    })

    return (
        <div>
            <Container>
                <Typography variant='h3' className='review' style={{paddingTop: '20px', paddingBottom: '20px'}}>Review Page</Typography>
           
                    {reviewListings}
             
            </Container>
        </div>
    );
};

export default ReviewPage;