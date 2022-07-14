import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import InputBase from '@mui/material/InputBase'
import { AuthContext } from '../../services/AuthProvider'
import styles from '../styles/navBar.module.scss'

type Props = {
  navItems: NavItems
}

const NavBar = (props: Props) => {
  const { signOut } = useContext(AuthContext)

  const NavItems = props.navItems.map((e) => (
    <Link to={e.path} key={e.path}>
      <e.navInfo.NavIcon sx={{ fontSize: 80, color: 'var(--primary-01)' }} />
    </Link>
  ))

  return (
    <nav className={styles.navContainer}>
      {NavItems.filter((_, i) => props.navItems[i].navInfo.beforeSearch)}

      <InputBase
        placeholder="Search"
        sx={{
          fontSize: 40,
          border: '2px solid var(--primary-01)',
          borderRadius: '5px',
          padding: '5px',
          marginRight: '5px',
        }}
      />

      {NavItems.filter((_, i) => !props.navItems[i].navInfo.beforeSearch)}

      <ExitToAppIcon
        sx={{ fontSize: 80, color: 'var(--primary-01)' }}
        onClick={() => signOut()}
      />
    </nav>
  )
}

export default NavBar
