import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importando o Menu e as Páginas
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Equipe from './pages/Equipe'
import Contato from './pages/Contato'
import Legislacao from './pages/legislacao'

function App() {
  return (
    // BrowserRouter "engloba" todo o site para habilitar o sistema de rotas
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* O Navbar fica fora do <Routes> porque ele deve aparecer em todas as páginas */}
        <Navbar />

        {/* O <Routes> é a área onde as páginas vão se alternar */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/legislacao" element={<Legislacao />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App