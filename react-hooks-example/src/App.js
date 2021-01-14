import './App.css';
import React, { useState } from 'react';
//Importerar vår pokemon.json för att kunna använda i denna fil
import pokemon from './assets/pokemon.json';

import Pokemon from './components/Pokemon';
import FavoritePokemon from './components/FavoritePokemon';

/**
 * 1. Importera vår pokemon-fil
 * 2. Lägga till våra pokemons i ett state med useState
 * 3. Visa alla pokemon på sidan
 * 4. Det ska gå att spara sina favoritpokemon
 *    a. Lägg till ett klick-event på varje pokemon
 *    b. När vi klickar på en pokemon spara i ett annat state med useState
 *    c. Visa alla favoritpokemon
 */

function App() {
  console.log(pokemon);
  //Sätt pokemons-arrayen i ett state
  const [pokemons, setPokemons] = useState(pokemon);
  //State för att spara favoritpokemon
  const [favorites, setFavorites] = useState([]);

  function updateFavorites(pokemon) {
    //Uppdatera vårt state där vi hämtar nuvarande state och sedan använder vi array metoden
    //concat för att lägga till den senaste pokemonen som valts som sedan returnerar en ny array
    //Som vårt state uppdateras med.
    setFavorites(favorites => favorites.concat(pokemon));
  }

  function removeFavorite(pokemon) {
    console.log('Pokemon att ta bort: ', pokemon);
    //Returnera alla pokemon i favorites som inte har samma id som den pokemon vi vill ta bort
    const newFavorites = favorites.filter(favorite => favorite.id !== pokemon.id);
    setFavorites(newFavorites);
  }

  return (
    <section className="App">
      <section>
        <h2>Pokemons</h2>
      { pokemons.map((pokemon) => {
        return <Pokemon pokeObj={ pokemon } key={ pokemon.id } updateState={ updateFavorites } />
      })}
      </section>
      <section>
        <h2>Favoriter</h2>
      { favorites.map((favorite) => {
        return <FavoritePokemon pokeObj={ favorite } key={ favorite.id } remove={ removeFavorite } />
      })}
      </section>
    </section>
  );
}

export default App;