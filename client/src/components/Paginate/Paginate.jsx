import React from "react";



export default function Paginate({ recipesPerPage, recipes, paginate, currentPage }) {

    const pageNum = [];
    for (let i = 1; i <= Math.ceil(recipes / recipesPerPage); i++) {
        pageNum.push(i)
    }
    return (
        <div>
            <ul>
                {
                    pageNum && pageNum.map(num => (
                        <li key={num}>
                            <button key={num} onClick={() => paginate(num)}
                                    style={num === currentPage ? { backgroundColor: '#fd684d',color: 'white' ,border: '1px solid #777db8' } : {}}
                            >{num}</button>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
