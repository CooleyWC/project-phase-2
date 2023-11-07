import { Card, CardContent, Grid, Typography} from '@mui/material';
import React, {useState} from 'react';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const QuestionCard = ({questionTitle, questionAnswer, questionImage, questionId, questionObj, handleReviewClick}) => {
    const [cardFront, setCardFront] = useState(true);


const handleCardClick = ()=>{
    setCardFront(!cardFront)
}


    return (
  
         
        <Card sx={{height: '100%'}}>
  
          
        <CardContent
            onClick={handleCardClick}
        >
            {cardFront ? <Typography variant='h5'>{questionTitle}</Typography>
            :   <><p>{questionAnswer}</p><img className='code-image' src={questionImage} alt='uh-oh'/>
                <button onClick={(e)=>{
                handleReviewClick(e, questionObj)
                }}>{questionObj.review ? 'Remove from Review': 'Add to Review'}</button> </>}
            
            </CardContent> 
     
     
     </Card>

    );
};

export default QuestionCard;