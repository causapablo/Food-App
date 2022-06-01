import React from 'react';

let FilterByDiet = ({handleFilterByDiets, diets}) => {
    return (
        <div>
            <select onChange={e => handleFilterByDiets(e)} defaultValue='default'>
                <option value="default" disabled >Select by diet type</option>
                {
                    diets && diets.map(d => (
                        <option value={d.name} key={d.id}>{d.name}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default FilterByDiet;