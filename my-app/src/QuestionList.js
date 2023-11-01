import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import Filter from './Filter';

const QuestionList = () => {
    const {questionData, setQuestionData} = useOutletContext();
    const [filteredQuestions, setFilteredQuestions] = useState('all');
    const [difficultyFilter, setDifficultyFilter] = useState('all')
    const [search, setSearch] = useState('')


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
    }


    const filteredDifficulty = filteredCategories.filter((question)=>{
        if(difficultyFilter === 'all'){
            return true
        } else {
            return question.difficulty === difficultyFilter
        }
    })

    const handleSearchChange = (e)=>{
        setSearch(e.target.value)
    }

    const filteredSearch = filteredDifficulty.filter((question)=>{
        return question.title.toLowerCase().includes(search.toLowerCase())
    })

    const handleReviewClick = (e, obj)=>{
        e.stopPropagation()
        console.log(obj)
        fetch(`http://localhost:3001/questions/${obj.id}`, {
            method: "PATCH", 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                review: !obj.review,
            })
        })
        .then(res=>res.json())
        .then((updatedQuestion)=>console.log(updatedQuestion))
    
    }


    const questionListings = filteredSearch.map((question)=>{
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
            <Filter handleCategoryFilter={handleCategoryFilter} 
            filteredQuestions={filteredQuestions}
            handleDifficultyFilter={handleDifficultyFilter}
            difficultyFilter={difficultyFilter}
            search={search}
            handleSearchChange={handleSearchChange}
            />
            {questionListings}
        </div>
    );
};

export default QuestionList;