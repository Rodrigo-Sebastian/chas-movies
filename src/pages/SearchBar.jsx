import { useState } from "react";
import {fetchMovies } from '../api';

const SearchBar = ({ setMovies, setError }) => {//settMovies - tar in en prop som är en funktion från en överordnad kompoenet. denna navänds för att lista över filmer
    const [searchTerm, setSearchTerm] = useState('');//state variable med tillhörande funktion setSearchTerm för att uppdatera dess värde.

    
    //asynkron funktion som kallar på fetchmovies med sökordet från sökfältet och sättet resultatet i movies state.
    /*
    const handleSearch = async () => {
        const results = await fetchMovies(searchTerm);
        setMovies(results);
    };
    */
    const handleSearch = async () => {
      const results = await fetchMovies(searchTerm);
      console.log(results); // Logga resultaten för att kontrollera strukturen


      // Kontrollera om det finns resultat och sätt felmeddelande om det inte finns
      if (results.length === 0) {
          setMovies([]); // Töm filmer
          setError('Ingen film matchade.'); // Sätt felmeddelande
      } else {
          setError(null); // Nollställ felmeddelande
          setMovies(results); // Sätt de hämtade filmerna
      }
  };


  return (
    <div className="flex flex-col items-start">
    <h1 className="text-2xl lg:text-5xl mb-8 font-semibold text-white">Sök efter olika Filmer!</h1>
    <div className="flex flex-row items-center">
      {/* Return värdet */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Skriv namnet på filmen du vill söka"
        className="border p-2 w-[300px] lg:w-[400px] rounded-md outline-none"
      />
      <button
        onClick={handleSearch} // när knappen klickas anropas funktionen handlesearch och gör api förfrågan
        className="ml-2 bg-blue-400 text-white p-2 rounded-md font-light transition duration-300 ease-in-out hover:bg-blue-800"
      > Sök efter filmen
      </button>
    </div>
  </div>
  )
}

export default SearchBar