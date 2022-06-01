import React from 'react';

function RecipeDetail(props) {
    const id = props.match.params.id;

    return (
        <div>This detail corresponds to the recipe with id = {id}</div>
    );
}

export default RecipeDetail;