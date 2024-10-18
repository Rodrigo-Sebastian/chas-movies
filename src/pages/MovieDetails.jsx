import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom' //fånga upp URL-parametrar i denna fall id. //useNavigate - hanterar navigeringsfunktioner för att byta sidor i react router
import { fetchMovieDetails } from '../api'; //funktion för att hämta detaljer om en film från API
import { CiHeart, CiUser, CiTimer   } from "react-icons/ci"; //ikoner
import { PiFilmReelThin, PiFilmScriptLight } from "react-icons/pi";//ikoner
import { GiDirectorChair } from "react-icons/gi";//ikoner
import { BsTicketPerforated } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';// hanterar Redux state, för att lägga till eller ta bort en film fårn favoriter
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';//en Redux action för att hantera favoriter.

const MovieDetails = () => {

    //states och effekter
    const {id} = useParams(); //hämtar filmens ID
    const navigate = useNavigate(); //ger funktioner för att navigera mellan sidor
    const dispatch = useDispatch(); 
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState(''); // Ny state för textfärg

    //hämtar filmens detaljer med fetchMovieDetails(id)
    //körs när komponenten laddas eller id förändras.
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

    //hämtar favoritfilmer från Redux state
    const favorites = useSelector(state => state.favorites);
    //kollar om den aktuella filmen redan är markerad som favorit.
    const isFavorite = favorites.some(fav => fav.imdbID === movie?.imdbID);

    //en funktion som hanterar våra favorit filmer genom att ge ett meddelande efter att vi har adderat och raderat en film från favoriterna.
    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFavorite(movie));
            setMessage('Filmen har tagits bort från dina favoriter!'); 
            setMessageColor('text-red-500'); // Sätt färg till röd
        } else {
            dispatch(addFavorite(movie));
            setMessage('Filmen har lagts till i dina favoriter!'); 
            setMessageColor('text-green-500'); // Sätt färg till grön
        }
    };

    //när meddelandet har uppdateras sätts en timer på 3 sekunder efter de 3 sekunder så försvinner vårt meddelande.
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
                    <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
                    <h3 className='flex items-center gap-2 text-xl'> 
                            <BsTicketPerforated  /> Rated:
                        </h3>
                        <p className='text-lg lg:text-xl font-semibold'>{movie.Rated}</p>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
                    <h3 className='flex items-center gap-2 text-xl'> 
                            <CiTimer  /> Film Tid:
                        </h3>
                        <p className='text-lg lg:text-xl font-semibold'>{movie.Runtime}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xl lg:text-2xl font-bold'>Handling</p>
                        <p className='max-w-[800px] text-lg lg:text-2xl font-light'>{movie.Plot}</p>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <button onClick={() => navigate('/')} className='bg-blue-400 text-white text-center w-[200px] p-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-800'>Gå ett steg tillbaka</button>
                        <button
                        onClick={handleFavoriteToggle}
                        className={`${
                            isFavorite ? 'bg-red-500 hover:bg-red-700' : 'bg-black hover:bg-gray-700'
                        } text-white text-center w-[200px] p-2 rounded-md transition duration-300 ease-in-out`}
                        >
                        {isFavorite ? 'Ta bort från favoriter' : 'Lägg till i favoriter'}
                        </button>
                    </div>
                    {message && (<p className={`${messageColor}`}>{message}</p>)} 
                </div>
            </div>
        ):(
            <p>Tyvärr, ingen film hittades</p>
        )}
    </div>
  );
};

export default MovieDetails