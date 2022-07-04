import axios from 'axios'

export const fetchMovie = (title: string) => {
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

  const MOVIE_BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&page={페이지번호(1)}`

  return axios.get(MOVIE_BASE_URL)
}
