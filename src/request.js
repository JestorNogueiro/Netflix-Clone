const API_KEY='f38b930fadefbdf64dbde15b81209b2a';

const request ={
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTrending:`/trending/all/day?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/genre/movie/list?api_key=${API_KEY}&language=en-US`,

fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchDocumentaryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchLatest:`movie/latest?api_key=${API_KEY}&language=en-US`

}
export default request;