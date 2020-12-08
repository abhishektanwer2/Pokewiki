import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import "./style.css";

const SearchBar = (props) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const filterPokemons = (inputValue) => {
        const { pokemons } = props
        return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(inputValue.toLowerCase()));
    }
    const loadOptions = (inputValue, callback) => {
        callback(filterPokemons(inputValue));
    }
    const handleChange = (value) => {
        setSelectedValue(null)
        props.history.push(`/pokewiki/${value.name}`)
    }

    return <AsyncSelect className={"searchbar"} cacheOptions
        placeholder='Type to search pokemon...'
        loadOptions={loadOptions}
        getOptionLabel={e => e.name}
        getOptionValue={e => e.name}
        onChange={handleChange}
        value={selectedValue}
    />
};

export default SearchBar;