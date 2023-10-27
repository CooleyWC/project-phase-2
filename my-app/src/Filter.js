import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Filter = () => {
    const {questionData} = useOutletContext();
    console.log(questionData)
    return (
        <div>
            <h1>Filter</h1>
        </div>
    );
};

export default Filter;