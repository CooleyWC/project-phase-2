import React, {useState} from 'react';


const QuestionCard = ({questionTitle, questionAnswer, questionImage}) => {
    const [cardFront, setCardFront] = useState(true);



const handleCardClick = ()=>{
    setCardFront(!cardFront)
}

const handleReviewClick = ()=>{
    //get id 
    //need to figure out how the button click doesnt get affected by the card click
    console.log('i need reviewed')
}

    return (
        <div className='question-card'
            onClick={handleCardClick}
        >
            {cardFront ? <h3>{questionTitle}</h3>
            : <><p>{questionAnswer}</p><img className='code-image' src={questionImage} alt='uh oh'/><button onClick={()=>handleReviewClick()}>Add to Review</button> </>}
            
        </div>
    );
};

export default QuestionCard;