import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import Filter from './Filter';

const QuestionList = () => {
    const {questionData, setQuestionData, isLoaded, setIsLoaded,} = useOutletContext();
    const [filteredQuestions, setFilteredQuestions] = useState('all');
    const [difficultyFilter, setDifficultyFilter] = useState('all')
   


    const handleCategoryFilter = (e) =>{
        setFilteredQuestions(e.target.value);
    }

    const filteredCategories = questionData.filter((question)=>{
        if(filteredQuestions==='all'){
            return true
        } else {
        return question.category === filteredQuestions
        }
    })

    const handleDifficultyFilter = (e)=>{
        setDifficultyFilter(e.target.value);
        console.log(difficultyFilter)
    }


    const filteredDifficulty = filteredCategories.filter((question)=>{
        if(difficultyFilter === 'all'){
            return true
        } else {
            return question.difficulty === difficultyFilter
        }
    })

    console.log(filteredDifficulty)

    const questionListings = filteredDifficulty.map((question)=>{
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
            <Filter handleCategoryFilter={handleCategoryFilter} 
            filteredQuestions={filteredQuestions}
            handleDifficultyFilter={handleDifficultyFilter}
            difficultyFilter={difficultyFilter}
            
            />
            {questionListings}
        </div>
    );
};

export default QuestionList;