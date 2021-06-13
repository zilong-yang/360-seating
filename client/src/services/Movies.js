import http from "../utils/API"

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB_ADDRESS = "https://api.themoviedb.org/3/movie/"

class MoviesDataService {

    async fetchNowPlaying(page = 1) {
        let fetched = await fetch(
            `${TMDB_ADDRESS}now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        return fetched.json();
    }

    async fetchMovie(movieID) {
        let fetched = await fetch(
            `${TMDB_ADDRESS}${movieID}?api_key=${API_KEY}&language=en-US`
        );
        return fetched.json();
    }
}

export default new MoviesDataService();