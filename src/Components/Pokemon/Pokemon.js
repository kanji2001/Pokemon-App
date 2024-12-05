import React, { useEffect, useState } from 'react'
import './Pokemon.css';
import PokemonCard from './PokemonCard';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState (null);
    const [search, setSearch] = useState ("");

    const api = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchPokemon = async () => {

        try {
            const res = await fetch(api);
            const data = await res.json();
            // console.log(data);

            const detailedPokeman = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                // console.log(data);
                return data;
            });

            const detailedResponse = await Promise.all(detailedPokeman);
            setPokemon(detailedResponse);   
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(error);
        }
    }

    useEffect (() => {
        fetchPokemon()
    }, [])

    const searchData = pokemon.filter((curPokemon) => curPokemon.name.toLowerCase().includes(search.toLowerCase()));

    if (loading) {
        return (
            <div>
                <h1>Loading.......</h1>
            </div>
        )
    }

    if (error) {
        return(
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }

  return (
    <>
      <section className='container'>
        <header>
            <h1> Lets Catch Pokemon</h1>
        </header>
        <div className='pokemon-search'>
            <input type="text" placeholder='search Pokemon' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
            <ul className="cards">
                {
                    searchData.map((curPokemon) => {
                        return(
                            <PokemonCard key={curPokemon.id} pokemonData = {curPokemon} />
                        )
                    })
                }
            </ul>
        </div>
      </section>
    </>
  )
}

export default Pokemon
