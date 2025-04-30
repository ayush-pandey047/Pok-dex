import React, { useEffect, useMemo, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import "../App.css"

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedType, setSelectedType] = useState("All");

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
                const data = await res.json();

                const detailedData = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        return res.json();
                    })
                );

                setPokemonList(detailedData);
            } catch (err){
                console.log("Failed to fetch pokemon:",err);
                setError(true);
            } finally{
                setLoading(false);
            }
         };
         fetchPokemon();
    }, []);

    const filteredPokemon = useMemo(() => {
        return pokemonList.filter((pokemon) => {
            const matcheSearch = pokemon.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchType = 
                selectedType === "All" ||
                pokemon.types.some((t) => t.type.name === selectedType.toLowerCase());

            return matcheSearch && matchType;
        });
    }, [pokemonList, searchTerm, selectedType]);

    if (loading) return <div className="status">Loading Pokemon...</div>;
    if (error) return <div className="status error"> Failed to load data.</div>;

    return(
        <div className="container">
            <h1 className="header">Pokédex</h1>
            <div className="controls">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                 <FilterDropdown
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}/>
            </div>

            {filteredPokemon.length === 0 ? (
                <div className="status">No Pokémon found.</div>
             ) : (
                <div className="grid">
                    {filteredPokemon.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                    ))}
                </div>
             )}
        </div>

    )
    
}

export default Home;