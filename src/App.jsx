import './App.css'
import Layout from './Layout'
import Navigationbar from './components/Navigationbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portopolio from './pages/Portopolio'

function App() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home/></Layout>}></Route>
          <Route path="/portopolio" element={<Layout><Portopolio/></Layout>}></Route>
        </Routes>
      </Router>
    </section>
  )
}

export default App
