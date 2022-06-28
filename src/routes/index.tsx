import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './Search'
import Favorite from './Favorite'

import styles from './routes.module.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='favorite' element={<Favorite />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
