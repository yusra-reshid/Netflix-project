// const API_KEY = import.meta.env.REACT_APP_API_KEY;
// const API_KEY = process.env.REACT_APP_API_KEY;
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchKidsVideos: `/discover/tv?api_key=${API_KEY}&with_generes=10762`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
//   fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchTvShow: `/tv/popular?api_key=${API_KEY}&languages=en-US&page=1`,
// };

// export default requests;

const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchKidsVideos: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;

