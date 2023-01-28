import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Tabela from './pages/TabelaMedidas'
import Receita from './pages/ReceitaCompleta'

import './styles/global.css'

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/tabelamedidas' element={<Tabela />} />
          <Route path='/receita/:id' element={<Receita />}/>
          <Route path='*' element={"Erro"} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
