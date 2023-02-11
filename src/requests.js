// api key
const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

const request = {
fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, fetchHotflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`, 
fetchComedyMovies: `V/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request;