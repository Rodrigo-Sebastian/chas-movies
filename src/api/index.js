import axios from 'axios';

const API_KEY = '9e9b0f23';

export const fetchMovies = async(title) => {
        const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
        return response.data.Search;
    
};

export const fetchMovieDetails = async (id) => {
    const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    return response.data;
}