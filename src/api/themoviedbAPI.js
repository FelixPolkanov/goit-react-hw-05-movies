import axios from 'axios';

const API_KEY = '13d1d6108716c95692977ae4bce9cff7';

axios.defaults.baseURL = `https://api.themoviedb.org/3`

export async function fetchTrendMovies() {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
    const { results } = response.data;
    console.log(results)
  return results;
}