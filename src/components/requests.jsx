const APIKEY = "cd48b9b030580909fcce753d6fde8a06";

const requests = {
  fetchTrends: `/trending/all/week?api_key=${APIKEY}&language=tr-TR`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=tr-TR`,
  fetchPopular: `/tv/popular?api_key=${APIKEY}&language=tr-TR`,

  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,

  fetchFamilyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10751`,
  fetchMusicalMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10402`,
  fetchCrimeMovies: `/discover/movie?api_key=${APIKEY}&with_genres=80`,
  fetchHistoryMovies: `/discover/movie?api_key=${APIKEY}&with_genres=36`,

  fetchActionSeries: `/discover/tv?api_key=${APIKEY}&with_genres=10759`,
  fetchAnimationSeries: `/discover/tv?api_key=${APIKEY}&with_genres=16`,
  fetchComedySeries: `/discover/tv?api_key=${APIKEY}&with_genres=35`,
  fetchCrimeSeries: `/discover/tv?api_key=${APIKEY}&with_genres=80`,
  fetchDramaSeries: `/discover/tv?api_key=${APIKEY}&with_genres=18`,
  fetchMysterySeries: `/discover/tv?api_key=${APIKEY}&with_genres=9648`,
  fetchWesternSeries: `/discover/tv?api_key=${APIKEY}&with_genres=37`,
  fetchFantasySeries: `/discover/tv?api_key=${APIKEY}&with_genres=10765`,
};

export default requests;
