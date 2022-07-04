import MovieList from './MovieList'
import { useState, ChangeEvent, MouseEvent } from 'react'
import { fetchMovie } from 'utils/fetchMovie'

import styles from './search.module.scss'

const Search = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }
  const handleOnSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    fetchMovie(value).then((res) => {
      setData(res.data.Search)
      setLoading(false)
      setValue('')
    })
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
    </div>
  )
}
export default Search
