import React from 'react';
import styles from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import {setNameFilter} from "../../redux/filtersSlice.js";


function SearchBox ({value}) {
    const dispatch = useDispatch();
    const handleFilterChange = (e) => {
        dispatch(setNameFilter(e.target.value));
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleFilterChange} />
        </div>
    );
}

export default SearchBox;