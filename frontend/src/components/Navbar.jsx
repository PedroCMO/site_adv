import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '20px', background: '#1a1a1a', borderBottom: '2px solid #333', marginBottom: '20px' }}>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/sobre" style={{ color: 'white', textDecoration: 'none' }}>Sobre</Link></li>
        <li><Link to="/equipe" style={{ color: 'white', textDecoration: 'none' }}>Equipe</Link></li>
        <li><Link to="/contato" style={{ color: 'white', textDecoration: 'none' }}>Contato</Link></li>
      </ul>
    </nav>
  )
}