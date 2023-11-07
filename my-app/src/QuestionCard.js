import { Button, Card, CardContent, Typography} from '@mui/material';
import React, {useState} from 'react';




const QuestionCard = ({questionTitle, questionAnswer, questionImage, questionObj, handleReviewClick}) => {
    const [cardFront, setCardFront] = useState(true);


const handleCardClick = ()=>{
    setCardFront(!cardFront)
}


    return (
  
         
        <Card sx={{backgroundColor: '#cce5ff', height: '100%'}} >
  
          
        <CardContent
            onClick={handleCardClick}
        >
            {cardFront ? <Typography variant='h5' gutterBottom>{questionTitle}</Typography>
            :   <><Typography variant='body1'>{questionAnswer}</Typography><img className='code-image' src={questionImage} alt='uh-oh'/>
                <br></br>
                <Button variant='contained' onClick={(e)=>{
                handleReviewClick(e, questionObj)
                }}>{questionObj.review ? 'Remove from Review': 'Add to Review'}</Button> </>}
            
            </CardContent> 
     
     
     </Card>

    );
};

export default QuestionCard;