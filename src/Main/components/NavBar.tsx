import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import InputBase from '@mui/material/InputBase'
import { AuthContext } from '../../services/AuthProvider'
import styles from '../styles/navBar.module.scss'

type Props = {
  navItems: NavItems
}

const NAV_ICON_STYLE = { fontSize: 60, color: 'var(--primary-01)' }

const NavBar = (props: Props) => {
  const { signOut } = useContext(AuthContext)

  const NavItems = props.navItems.map((e) => (
    <Link to={e.path} title={e.label} key={e.path}>
      <e.navInfo.NavIcon sx={NAV_ICON_STYLE} />
    </Link>
  ))

  return (
    <nav className={styles.navContainer}>
      {NavItems.filter((_, i) => props.navItems[i].navInfo.beforeSearch)}

      <InputBase
        placeholder="Search"
        sx={{
          fontSize: 20,
          border: '2px solid var(--primary-01)',
          borderRadius: '5px',
          padding: '5px',
          marginRight: '5px',
        }}
      />

      {NavItems.filter((_, i) => !props.navItems[i].navInfo.beforeSearch)}

      <ExitToAppIcon sx={NAV_ICON_STYLE} onClick={() => signOut()} />
    </nav>
  )
}

export default NavBar
