import './App.scss'
import { Logo } from './components/logo'

function App() {
  return (
    <main>
      <header className="header-container">
        <Logo />
        <nav className="menu-options">
          <a>Quem somos</a>
          <a>Como funciona</a>
          <a>Contato</a>
        </nav>
        <button>Login</button>
      </header>
    </main>
  )
}

export default App
