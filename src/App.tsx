import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Navigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import EmailIcon from '@mui/icons-material/Email'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useEffect } from 'react'
import { AuthProvider } from './services/AuthProvider'
import Profile from './User/components/Profile'
import Home from './Main/components/Home'
import Ideas from './Ideas/components/Ideas'
import Account from './User/components/Account'
import Collaborate from './User/components/Collaborate'
import Messages from './User/components/Messages'
import Notifications from './User/components/Notifications'
import NavBar from './Main/components/NavBar'

const APP_CONTENT: Array<AppContent> = [
  {
    label: 'Home',
    path: '/home',
    element: <Home />,
    navInfo: {
      NavIcon: HomeIcon,
      beforeSearch: true,
    },
  },
  {
    label: 'Ideas',
    path: '/ideas',
    element: <Ideas />,
    navInfo: {
      NavIcon: LightbulbIcon,
      beforeSearch: true,
    },
  },
  {
    label: 'Collaborate',
    path: '/collaborate',
    element: <Collaborate />,
    navInfo: {
      NavIcon: PeopleAltIcon,
      beforeSearch: true,
    },
  },
  {
    label: 'Messages',
    path: '/messages',
    element: <Messages />,
    navInfo: {
      NavIcon: EmailIcon,
      beforeSearch: true,
    },
  },
  {
    label: 'Notifications',
    path: '/notifications',
    element: <Notifications />,
    navInfo: {
      NavIcon: NotificationsIcon,
      beforeSearch: true,
    },
  },
  {
    label: 'Account',
    path: '/account',
    element: <Account />,
    navInfo: {
      NavIcon: AccountCircleIcon,
      beforeSearch: false,
    },
  },
  {
    label: 'Profile',
    path: '/profile',
    element: <Profile />,
  },
]

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <AuthProvider>
        <Router>
          <NavBar navItems={APP_CONTENT.filter((e) => e.navInfo) as NavItems} />

          <main>
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />

              {APP_CONTENT.map(({ path, element }) => (
                <Route path={path} element={element} key={path} />
              ))}

              {/* <Route path="/logout" element={} /> */}
            </Routes>
          </main>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
