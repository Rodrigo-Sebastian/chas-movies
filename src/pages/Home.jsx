import React, { useState } from 'react'
import SearchBar from './searchBar';
import background from '../../public/chas-movies-bg.jpg'
import { Link } from 'react-router-dom';

const Home = () => {

  const [movies, setMovies] = useState([]);


  return (
    <div>
      <div style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} className='h-[800px]'>
          <div className='py-20 flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between lg:w-[1620px] lg:m-auto'>
              <div className='flex flex-col items-start gap-2 p-4'>
                  <h1 className='text-2xl lg:text-5xl font-semibold text-white'>Välkomen till Chas-movies!</h1>
                  <h2 className='text-xl lg:text-3xl text-white'>Här hittart du allt om de senaste filmer på hollywood</h2>
                  <p className='text-lg lg:text-2xl font-light text-white italic'>Börja med att söka på en film som intresserar dig, det är grattis!</p>
              </div>
              <SearchBar setMovies={setMovies}/>
          </div>
          {/* Filmlistan visas här under texten och sökfältet */}
      </div>
      {/* Filmlistan visas här under texten och sökfältet */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.imdbID} className="flex flex-col items-center p-4 rounded-md bg-gray-100 w-[280px] shadow-md transition duration-300 ease-in-out hover:bg-gray-300">
              <Link to={`/movie/${movie.imdbID}`} className='flex flex-col items-center'>
                <img src={movie.Poster} alt={movie.Title} className="rounded-md w-full h-[350px] object-cover" />
                <h2 className="mt-2 text-xl font-medium text-center line-clamp-2 w-full overflow-hidden">{movie.Title}</h2>
                <h3 className="mt-1 text-lg font-light">{movie.Year}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-white text-xl">Inga filmer att visa. Sök på en film för att se resultat!</p>
        )}
      </div>
    </div>
  )
}

export default Home