import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom"
import Home from "./pages/Home"
import Tank from "./pages/Tank"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
        <Route path="/tanks/:id" element={<Tank/>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/signup" element={<h1>signup</h1>}/>
        <Route path="*" element={<h1>notFound</h1>}/>
      </Routes>
    </Router>
  )
}

export default App
