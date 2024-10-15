import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchMovieDetails } from '../api';
import { CiHeart, CiUser  } from "react-icons/ci";
import { PiFilmReelThin, PiFilmScriptLight } from "react-icons/pi";
import { GiDirectorChair } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const MovieDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(''); // State för meddelande

    useEffect(() => {
        const getMovieDetails = async () => {
            try{
                const movieData = await fetchMovieDetails(id);
                setMovie(movieData);
            }catch (err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        };
        getMovieDetails();
    }, [id]);

    const favorites = useSelector(state => state.favorites);
    const isFavorite = favorites.some(fav => fav.imdbID === movie?.imdbID);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFavorite(movie));
            setMessage('Filmen har tagits bort från dina favoriter!'); 
        } else {
            dispatch(addFavorite(movie));
            setMessage('Filmen har lagts till i dina favoriter!'); 
        }
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(''), 3000); 
            return () => clearTimeout(timer); 
        }
    }, [message]);

    if(loading) return <p>Laddar filmen...</p>
    if(error) return <p>Fel: {error}</p>

    return (
    <div className='flex justify-center my-20 lg:h-screen lg:my-0'>
        {movie ? (
            <div className='flex flex-col lg:flex-row justify-center items-center gap-28'>
                <div className='rounded-md bg-gray-100 p-4'>
                    <img src={movie.Poster} alt={movie.Title} className='rounded-md'/>
                    <h1 className='py-2 font-semibold text-xl'>{movie.Title} ({movie.Year})</h1>
                </div>
                <div className='flex flex-col gap-8 p-4'>
                    <h2 className='flex items-center gap-2 text-xl lg:text-2xl'>
                        <PiFilmReelThin/>Genre: {movie.Genre}
                        <CiHeart style={{ marginLeft: '10px', cursor: 'pointer', color: isFavorite ? 'red' : 'black' }}
                                onClick={handleFavoriteToggle}/>
                    </h2>
                    <div className='flex flex-row items-center gap-2'>
                        <h3 className='flex items-center gap-2 text-xl'> 
                            <GiDirectorChair /> Regissör:
                        </h3>
                        <p className='text-lg lg:text-xl font-semibold'>{movie.Director}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
                        <h3 className='flex items-center gap-2 text-xl'>
                            <CiUser />
                            Skådespelare:
                        </h3>
                        <p className='text-lg lg:text-xl font-semibold'>{movie.Actors}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
                        <h3 className='flex items-center gap-2 text-xl'>
                            <PiFilmScriptLight />
                            Manusförfattare:
                        </h3>
                        <p className='text-lg lg:text-xl font-semibold'>{movie.Writer}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xl lg:text-2xl font-bold'>Handling</p>
                        <p className='max-w-[800px] text-lg lg:text-2xl font-light'>{movie.Plot}</p>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <button onClick={() => navigate('/')} className='bg-blue-400 text-white text-center w-[200px] p-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-800'>Gå ett steg tillbaka</button>
                        <button onClick={handleFavoriteToggle} className='bg-black text-white text-center w-[200px] p-2 rounded-md transition duration-300 ease-in-out hover:bg-red-800'>Lägg till i favoriter</button>
                    </div>
                    {message && <p className='text-green-500 font-bold'>{message}</p>} 
                </div>
            </div>
        ):(
            <p>Tyvärr, ingen film hittades</p>
        )}
    </div>
  );
};

export default MovieDetails