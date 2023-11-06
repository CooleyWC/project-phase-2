import React, {useState} from 'react';


const QuestionCard = ({questionTitle, questionAnswer, questionImage, questionId, questionObj, handleReviewClick}) => {
    const [cardFront, setCardFront] = useState(true);


const handleCardClick = ()=>{
    setCardFront(!cardFront)
}


    return (
        <div className='question-card'
            onClick={handleCardClick}
        >
            {cardFront ? <h3>{questionTitle}</h3>
            :   <><p>{questionAnswer}</p><img className='code-image' src={questionImage} alt='uh-oh'/>
                <button onClick={(e)=>{
                handleReviewClick(e, questionObj)
                }}>{questionObj.review ? 'Remove from Review': 'Add to Review'}</button> </>}
            
        </div>
    );
};

export default QuestionCard;