import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import Filter from './Filter';

const QuestionList = () => {
    const {questionData, setQuestionData, isLoaded, setIsLoaded,} = useOutletContext();
    const [dropDownSelect, setdropDownSelect] = useState('all')
   


    const handleCategoryFilter = (e) =>{
        setdropDownSelect(e.target.value);
    }

    const filteredCategories = questionData.filter((question)=>{
        if(dropDownSelect==='all'){
            return question
        } else {
        return question.category === dropDownSelect
        }
    })

    const questionListings = filteredCategories.map((question)=>{
        return <QuestionCard 
        key={question.id}
        questionId={question.id} 
        questionTitle={question.title}
        questionAnswer={question.answer}
        questionImage={question.code}
        />
    })

    return (
        <div>
            <Filter handleCategoryFilter={handleCategoryFilter}/>
            {questionListings}
        </div>
    );
};

export default QuestionList;