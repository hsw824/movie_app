import { BrowserRouter, Routes, Route } from 'react-router-dom'

import styles from './routes.module.scss'
import Search from './Search'

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
