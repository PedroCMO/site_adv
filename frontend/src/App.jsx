import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importando o Menu e as Páginas
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Equipe from './pages/Equipe'
import Contato from './pages/Contato'
import Legislacao from './pages/legislacao'

function App() {
  return (
    // BrowserRouter "engloba" todo o site para habilitar o sistema de rotas
    <BrowserRouter>
      
      {/* O Navbar fica fora do <Routes> porque ele deve aparecer em todas as páginas */}
      <Navbar />

      {/* O <Routes> é a área onde as páginas vão se alternar */}
      <div style={{ padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/legislacao" element={<Legislacao />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App