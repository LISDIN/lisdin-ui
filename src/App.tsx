import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Navigate } from 'react-router-dom'
import { AuthProvider } from './Auth'
import Profile from './Profile'
import Home from './Home'
import Ideas from './Ideas'
import Account from './Account'
import Collaborate from './Collaborate'
import Messages from './Messages'
import Notifications from './Notifications'

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/home" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
