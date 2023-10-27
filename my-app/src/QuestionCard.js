import React from 'react';


const QuestionCard = ({questionTitle}) => {
    return (
        <div className='question-card'>
            <h3>{questionTitle}</h3>
        </div>
    );
};

export default QuestionCard;