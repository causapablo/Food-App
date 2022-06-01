import React from 'react';

let OrderByScore = ({handleOrderByScore}) => {
    return (
        <div>
            <select onChange={e => handleOrderByScore(e)} defaultValue='default'>
                <option value="default" disabled >Order by score</option>
                <option value="Desc">Higher</option>
                <option value="Asc">Lower</option>
            </select>
        </div>
    );
}

export default OrderByScore;