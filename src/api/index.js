const API_KEY = '9e9b0f23';

// Fetchar och hämtar en lista över filmer baserat på en given titel.
export const fetchMovies = async (title) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error('Något gick fel med förfrågan');
    }

    const data = await response.json();
    
    // Kontrollera om sökresultat inte hittades.
    if (data.Response === 'False') {
      return []; // Returnera tom array om inga filmer hittades.
    }

    return data.Search;
  } catch (error) {
    console.error('Fel vid hämtning av filmer:', error);
    return []; // Returnera tom array om ett fel uppstår.
  }
};

// Hämtar detaljer för en enskild film baserat på ID.
export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error('Något gick fel med förfrågan');
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Fel vid hämtning av filmens detaljer:', error);
    return null; // Returnera null om ett fel uppstår.
  }
};
