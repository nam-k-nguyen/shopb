import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  // Development setup, not permanent
  let loggedIn = false

  return (
    <div className="App">
      {loggedIn ? <Dashboard /> : <Home />}
    </div>
  )
}

export default App
