import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import { Routes, Route } from 'react-router-dom'
import LayoutOne from './layouts/LayoutOne'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutOne />}>
          <Route index={true} element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
