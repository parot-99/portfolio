import { useRef } from 'react'
import './App.css'
import 'winbox/dist/css/winbox.min.css'
import WinBox from 'winbox/src/js/winbox'
import FindMe from './components/FindMe'

function App() {
  const aboutContentRef = useRef()
  const contactContentRef = useRef()

  const aboutClicked = () => {
    new WinBox({
      title: 'About Me',
      width: '600px',
      height: '400px',
      top: 150,
      right: 50,
      bottom: 50,
      left: 250,
      mount: aboutContentRef.current,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  }

  const contactClicked = () => {
    new WinBox({
      title: 'About Me',
      width: '600px',
      height: '400px',
      top: 150,
      right: 50,
      bottom: 50,
      left: 250,
      mount: contactContentRef.current,
      onfocus: function () {
        this.setBackground('#00aa00')
      },
      onblur: function () {
        this.setBackground('#777')
      },
    })
  }

  return (
    <main className="container">
      <nav>
        <ul>
          <li id="about" onClick={aboutClicked}>
            /about
          </li>
          <li id="contact" onClick={contactClicked}>
            /contact
          </li>
        </ul>
      </nav>
      <section>
        <h1>
          Ahmed:$ <span className="cursor">|</span>
        </h1>
        <h3>Projects:</h3>
        <ul className="grid">
          <li>Covid-19...</li>
          <li>EliteOutfits</li>
          <li>TwitterClone</li>
          <li>Steve</li>
          <li>TicTacToe</li>
        </ul>
        <FindMe />
    
      </section>
      <article className="hidden">
        <div id="about-content" ref={aboutContentRef}>
          <h2>
            about-me:$ <span className="cursor">|</span>
          </h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            repellat iste odio aut ullam quos!
          </p>
        </div>
      </article>
      <article className="hidden">
        <div id="contact-content" ref={contactContentRef}>
          <h2>
            contact-me:$ <span className="cursor">|</span>
          </h2>
          <p>You can contact me at the email and phone number below</p>
          <ul>
            <li>Phone: 05318876651</li>
            <li>Email: ahmed-public@hotmail.com</li>
          </ul>
        </div>
      </article>
    </main>
  )
}

export default App
