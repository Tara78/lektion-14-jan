import React from 'react';

function Pokemon(props) {

    //Denna funktion kör när vi klickar på vår knapp och uppdaterar favorites i App.js
    //Detta kan förkortas till () => props.updateState(props.pokeObj); på rad 15 istället för
    //handleClick ifall man vill.
    function handleClick() {
        props.updateState(props.pokeObj);
    }

    return (
        <article>
            <p>Namn: { props.pokeObj.name }</p>
            <p>ID: { props.pokeObj.id }</p>
            <button onClick={ handleClick }>Spara som favorit</button>
            <p>-----------------------------</p>
        </article>
    )
}

export default Pokemon;