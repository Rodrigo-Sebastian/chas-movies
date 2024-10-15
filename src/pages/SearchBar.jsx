import { useState } from "react";
import {fetchMovies } from '../api';

const SearchBar = ({ setMovies }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        const results = await fetchMovies(searchTerm);
        setMovies(results);
    };

  return (
    <div className="flex flex-col items-start">
    <h1 className="text-2xl lg:text-5xl mb-8 font-semibold text-white">Sök efter olika Filmer!</h1>
    <div className="flex flex-row items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Skriv namnet på filmen du vill söka"
        className="border p-2 w-[300px] lg:w-[400px] rounded-md outline-none"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-400 text-white p-2 rounded-md font-light transition duration-300 ease-in-out hover:bg-blue-800"
      > Sök efter filmen
      </button>
    </div>
  </div>
  )
}

export default SearchBar