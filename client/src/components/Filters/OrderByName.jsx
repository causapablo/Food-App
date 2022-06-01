import React from 'react';

let OrderByName = ({handleOrderByName}) => {
    return (
        <div>
            <select onChange={e => handleOrderByName(e)} defaultValue='default'>
                <option value="default" disabled >Alphabetical order</option>
                <option value="Asc">A-Z</option>
                <option value="Desc">Z-A</option>
            </select>
        </div>
    );
}

export default OrderByName;