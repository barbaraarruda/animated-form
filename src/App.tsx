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
      <div className="content-container">
        <div className="heading-container">
          <h2>Vamos gerenciar o</h2>
          <h2>seu casamento.</h2>
        </div>
        
        <div className="bubble bride">
          👰
        </div>
        <div className="bubble ring">
          💍  
        </div>
        <div className="bubble calendar">
          📆
        </div>
        <div className="bubble heart">
          ❤️
        </div>
      </div>
    </main>
  )
}

export default App
