import WinBoxItem from "./WinBoxItem"

const Header = () => {
  return (
    <header>
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
      </header>
  )
}

export default Header
