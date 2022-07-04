import { NavLink } from 'react-router-dom'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.menuContainer}>
      <ul className={styles.menuWrapper}>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? styles.selected : undefined)}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to='/favorite' className={({ isActive }) => (isActive ? styles.selected : undefined)}>
            Favorite
          </NavLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
