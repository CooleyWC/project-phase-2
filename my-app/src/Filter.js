import React, {useState} from 'react';
import { useOutletContext } from 'react-router-dom';

const Filter = () => {
    const {questionData} = useOutletContext();
    const [dropDownSelect, setdropDownSelect] = useState('select a category')
   

    const handleSelect = (e)=>{
        setdropDownSelect(e.target.value);
        console.log(dropDownSelect)
    }

    return (
        <div>
            <h1>Filter</h1>
            <select onChange={handleSelect}>
                <option value='select-a-category'>select a category</option>
                <option value='jsx'>JSX</option>
                <option value='componenets-props'>components-props</option>
                <option value='state'>state</option>
            </select>
        </div>
    );
};

export default Filter;