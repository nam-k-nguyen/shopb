import './App.css'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'

import GeneralLayout from './layouts/GeneralLayout'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import Register from './pages/Register'

function App() {
  const isAuthenticated = false

  return (
    <div className="App">
      <GeneralLayout isAuthenticated={isAuthenticated}>
        <Routes>
          {/* Unprotected Routes, navigate to dashboard if user is authenticated */}
          <Route element={isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />}>
            <Route index element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/* Protected Routes, navigate to home page if user is not authenticated */}
          <Route element={isAuthenticated ? <Outlet /> : <Navigate to="/" />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </GeneralLayout>
    </div>
  )
}

export default App
