const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

const requests = {
    trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    netflix_originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    top_rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    action_movies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedy_movies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horror_movies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romance_movies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;