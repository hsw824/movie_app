import { Outlet } from 'react-router-dom'
import Footer from './Footer'

import styles from './layouts.module.scss'

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
