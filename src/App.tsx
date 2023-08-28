import './App.scss'
import { ArrowIconLogin } from './components/arrow-iconlogin'
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
        <button>
          <div className='btn-face-white'>
            Login
            <ArrowIconLogin />
          </div>
          <div className='btn-face-pink'>
            Login
            <ArrowIconLogin />
          </div>
        </button>
      </header>
    </main>
  )
}

export default App
