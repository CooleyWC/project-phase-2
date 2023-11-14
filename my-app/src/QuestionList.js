import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import Filter from './Filter';
import { Container} from '@mui/system';
import Grid from '@mui/material/Grid';

const QuestionList = () => {

    const {questionData, handleReviewClick} = useOutletContext();
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

    const questionListings =                 
        <Grid container spacing={2}>
            {filteredSearch.map((question)=>(
                <Grid item xs={12} sm={6} md={4} key={question.id}>
                    <QuestionCard 
                        key={question.id}
                        questionId={question.id} 
                        questionTitle={question.title}
                        questionAnswer={question.answer}
                        questionImage={question.code}
                        handleReviewClick={handleReviewClick}
                        questionObj={question}
                        />
                </Grid>
            ))}
        </Grid>

    return (
        <div>
            <Filter 
                handleCategoryFilter={handleCategoryFilter} 
                filteredQuestions={filteredQuestions}
                handleDifficultyFilter={handleDifficultyFilter}
                difficultyFilter={difficultyFilter}
                search={search}
                handleSearchChange={handleSearchChange}
            />
            <div>
                <Container>
                    {questionListings}
                </Container>
            </div>
        </div>
    );
};

export default QuestionList;