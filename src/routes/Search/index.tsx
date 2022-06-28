import { useState, ChangeEvent, MouseEvent } from 'react'

import styles from './search.module.scss'

const Search = () => {
  const [value, setValue] = useState('')
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const handleOnSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
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
    </div>
  )
}
export default Search
