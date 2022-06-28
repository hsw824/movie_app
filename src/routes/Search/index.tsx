import { useState, ChangeEvent, MouseEvent } from 'react'
import axios from 'axios'
import { ProductProps } from 'types/ProductList'
import { MovieList } from './MovieList'
import Footer from 'components/Footer'

import styles from './search.module.scss'

const Search = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState<ProductProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

  const MOVIE_BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}&page={페이지번호(1)}`

  const fetchData = async () => {
    const response = await axios.get(`${MOVIE_BASE_URL}`)
    setData(response.data.Search)
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const handleOnSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    fetchData()
    setLoading(false)
    setValue('')
  }
  return (
    <div className={styles.search}>
      <form>
        <input type='text' placeholder='Search for a movie' value={value} onChange={handleOnChange} />
        <button type='submit' onClick={handleOnSubmit}>
          Search
        </button>
      </form>
      {loading ? <h1>No search results found</h1> : <MovieList data={data} />}
      <Footer />
    </div>
  )
}
export default Search
