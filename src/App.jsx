import './App.css'
import 'winbox/dist/css/winbox.min.css'
import FindMe from './components/FindMe'
import WinBoxItem from './components/WinBoxItem'

function App() {
  return (
    <main className="container">
      <nav>
        <ul>
          <WinBoxItem value="/about" title="About Me" terminalTitle="about-me">
            <p>
              Goal-oriented, creative and motivated senior year computer
              engineering student. During my bachelors, I worked on many side
              projects that taught me more about the software lifecycle and the
              newest technologies and tools used.
            </p>
          </WinBoxItem>
          <WinBoxItem
            value="/contact"
            title="Contact Me"
            terminalTitle="contact-me"
          >
            <p>You can contact me at the email and phone number below</p>
            <ul>
              <li>Phone: 05318876651</li>
              <li>Email: ahmed-public@hotmail.com</li>
            </ul>
          </WinBoxItem>
        </ul>
      </nav>
      <section>
        <h1>
          Ahmed:$ <span className="cursor">|</span>
        </h1>
        <h3>Projects:</h3>
        <ul className="grid">
          <WinBoxItem
            value="Covid-19..."
            title="Covid-19 Warning System"
            terminalTitle="project"
          >
            <p>
              A warning system that can detect people with/without a face mask
              from images and videos using deep learning.
            </p>
            <ul>
              <a
                href="https://github.com/parot-99/Covid-19-Warning-System"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </ul>
          </WinBoxItem>
          <WinBoxItem
            value="EliteOutfits"
            title="EliteOutfits"
            terminalTitle="project"
          >
            <p>Ecommere website using nodejs and reactjs.</p>
            <ul>
              <li>
                <a
                  href="https://github.com/parot-99/EliteOutfits"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </li>
              <li>
                <a
                  href="https://eliteoutfits.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </li>
            </ul>
          </WinBoxItem>
          <WinBoxItem
            value="TwitterClone"
            title="TwitterClone"
            terminalTitle="project"
          >
            <p>A simple twitter clone using django and reactjs.</p>
            <ul>
              <li>
                <a
                  href="https://github.com/parot-99/TwitterClone"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </li>
              <li>
                <a
                  href="https://parot-twitter-clone.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </li>
            </ul>
          </WinBoxItem>
          <WinBoxItem
            value="Steve"
            title="Steve"
            terminalTitle="project"
          >
            <p>3D object using javascript and webgl API.</p>
            <ul>
              <li>
                <a
                  href="https://github.com/parot-99/Steve"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </li>
            </ul>
          </WinBoxItem>
          <WinBoxItem
            value="TicTacToe"
            title="TicTacToe"
            terminalTitle="project"
          >
            <p>Simple TocTacToe using java.</p>
            <ul>
              <li>
                <a
                  href="https://github.com/parot-99/TicTacToe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </li>
            </ul>
          </WinBoxItem>
        </ul>
        <FindMe />
      </section>
    </main>
  )
}

export default App
