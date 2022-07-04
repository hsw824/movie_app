import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './Search'
import Favorite from './Favorite'

import styles from './routes.module.scss'
import Layout from 'Layouts'

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Search />} />
            <Route path='favorite' element={<Favorite />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
