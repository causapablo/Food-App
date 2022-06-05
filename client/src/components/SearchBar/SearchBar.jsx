import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./SearchBar.css";
import {searchByTitle} from "../../redux/actions/actionsCreators";

export function SearchBar() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    //Handle del input
    function handleInputChange(e) {
        e.preventDefault();
        setTitle(e.target.value);
    }
    //Handle Search
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchByTitle(title));
        console.log(title);
        setTitle("");
    }

    return (
        <div class="search-container">
            <input
                value={title}
                class="input-search"
                onChange={(e) => handleInputChange(e)}
                type="text"
                placeholder="Recipe title"
            />
            <button class="btn-search" onClick={(e) => handleSubmit(e)} type="submit">
                Search
            </button>
        </div>
    );
}
// import React, {useState} from "react";
// import {useDispatch} from "react-redux";
// import {searchByTitle} from "../../redux/actions/actionsCreators";
//
//
// export default function SearchBar({returnToFirstPage}) {
//     const dispatch = useDispatch();
//     const [title, setTitle] = useState('');
//
//     function handleChange(e) {
//         e.preventDefault();
//         setTitle(e.target.value);
//     };
//
//     function handleButton(e) {
//         e.preventDefault();
//         dispatch(searchByTitle(title))
//             .then(() => {
//                 returnToFirstPage();
//             })
//     };
//
//     return (
//         <div>
//             <input type="text"
//                    placeholder='Search by name or diet type:'
//                    onChange={(e) => handleChange(e)}/>
//             <button type='submit' onClick={(e) => handleButton(e)}>Search</button>
//         </div>
//     )
// }