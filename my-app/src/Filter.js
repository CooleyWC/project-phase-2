import React, {useState} from 'react';
// import { useOutletContext } from 'react-router-dom';

const Filter = ({handleCategoryFilter}) => {
    // const {questionData} = useOutletContext();
    // const [dropDownSelect, setdropDownSelect] = useState('select a category')


    return (
        <div>
            <h1>Filter</h1>
            <select onChange={handleCategoryFilter}>
                <option value='all'>--Select a Category--</option>
                <option value='jsx'>JSX</option>
                <option value='components-props'>Components-Props</option>
                <option value='state'>State</option>
                <option value='router'>Router</option>
            </select>
        </div>
    );
};

export default Filter;