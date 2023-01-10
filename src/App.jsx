import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Doces from './pages/Doces'
import Salgados from './pages/Salgados'
import Sobre from './pages/Sobre'

import './styles/global.css'

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doces' element={<Doces />} />
          <Route path='/salgados' element={<Salgados />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
