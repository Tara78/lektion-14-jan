import React from 'react';

function FavoritePokemon(props) {
    function handleClick() {
        props.remove(props.pokeObj);
    }

    return (
        <article>
            <p>Namn: { props.pokeObj.name } </p>
            <p>ID: { props.pokeObj.id }</p>
            <button onClick={ handleClick }>Ta bort favorit</button>
        </article>
    )
}

export default FavoritePokemon;