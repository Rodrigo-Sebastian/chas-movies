import axios from 'axios'; // HTTP-anrop

const API_KEY = '9e9b0f23';

//fetchar och hämtar en lista över filmer baserat på en give titel.
export const fetchMovies = async(title) => {
        const response = await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
        return response.data.Search;
    
};

//hämtar detaljer för en enskild film baserat på ID
export const fetchMovieDetails = async (id) => {
    const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    return response.data;
}