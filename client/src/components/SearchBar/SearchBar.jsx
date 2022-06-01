import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {searchByTitle} from "../../redux/actions/actionsCreators";


export default function SearchBar({returnToFirstPage}) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setTitle(e.target.value);
    };

    function handleButton(e) {
        e.preventDefault();
        dispatch(searchByTitle(title))
            .then(() => {
                returnToFirstPage();
            })
    };

    return (
        <div>
            <input type="text"
                   placeholder='Search by name or diet type:'
                   onChange={(e) => handleChange(e)}/>
            <button type='submit' onClick={(e) => handleButton(e)}>Search</button>
        </div>
    )
}