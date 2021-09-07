import './App.css'
import 'winbox/dist/css/winbox.min.css'
import FindMe from './components/FindMe'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  return (
    <main className="container">
      <Header />
      <section>
        <h1>
          Ahmed:$ <span className="cursor">|</span>
        </h1>
        <Projects />
        <FindMe />
      </section>
    </main>
  )
}

export default App
