import React, {useState} from 'react';


const QuestionCard = ({questionTitle, questionAnswer}) => {
    const [cardFront, setCardFront] = useState(true);

const handleCardClick = ()=>{
    setCardFront(!cardFront)
}

    return (
        <div className='question-card'
            onClick={handleCardClick}
        >
            {cardFront ? <h3>{questionTitle}</h3> : <p>{questionAnswer}</p>}
        </div>
    );
};

export default QuestionCard;