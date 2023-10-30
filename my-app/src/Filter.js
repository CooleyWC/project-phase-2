import React, {useState} from 'react';
// import { useOutletContext } from 'react-router-dom';

const Filter = ({handleCategoryFilter, filteredQuestions, handleDifficultyFilter, difficultyFilter}) => {
    // const {questionData} = useOutletContext();
    // const [dropDownSelect, setdropDownSelect] = useState('select a category')


    return (
        <div>
            <h1>Filter</h1>
            <label>
                <select onChange={handleCategoryFilter} value={filteredQuestions}>
                    <option value='all'>--Select a Category--</option>
                    <option value='jsx'>JSX</option>
                    <option value='components-props'>Components-Props</option>
                    <option value='state'>State</option>
                    <option value='router'>Router</option>
                </select>
            </label>
            <label>
                <select onChange={handleDifficultyFilter} value={difficultyFilter}>
                    <option value='all'>--Select a Difficulty Level</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='advanced'>Advanced</option>
                </select>
            </label>
        </div>
    );
};

export default Filter;