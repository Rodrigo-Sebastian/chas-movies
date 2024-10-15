import { useSelector, useDispatch  } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../redux/favoritesSlice'; 
import FavoritesBg from '../../public/chas-favorites.jpg'

const Favorites = () => {
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const handleRemoveFromFavorites = (id) => {
        dispatch(removeFavorite({ imdbID: id })); 

    };

  return (
    <div style={{backgroundImage: `url(${FavoritesBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} className='flex flex-col justify-center items-center gap-4 lg:h-screen'>
        <h1 className='text-2xl text-white font-semibold mt-20 mb-8'>Här visas dina Favorita filmer</h1>
        <div className='flex flex-row flex-wrap justify-center mb-20 gap-6'>
            {favorites.length > 0 ? (
                favorites.map(movie => (
                    <div key={movie.imdbID} className="flex flex-col flex-wrap p-2 rounded-md bg-gray-100">
                        <Link to={`/movie/${movie.imdbID}`} >
                            <img src={movie.Poster} alt={movie.Title} className="movie-poster rounded-md max-h-[410px]"/>
                            <h2 className="mt-4 text-xl font-medium max-w-[200px]">{movie.Title}</h2>
                            <h3 className="mt-4 tex-lg font-light">{movie.Year}</h3>
                        </Link>
                        <button onClick={() => handleRemoveFromFavorites(movie.imdbID)} className='p-2.5 bg-red-500 text-white rounded-md w-[200px] my-4 transform transition duration-300 ease-in-out hover:bg-black'>
                                Ta bort från favoriter
                        </button>
                    </div>
                ))
            ):(
                <p className=' text-xl italic font-bold text-white'>Du har inte lagt till några favorita filmer än! </p>
            )}
        </div>
    </div>
  )
}

export default Favorites