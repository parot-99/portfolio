import { Fragment } from 'react'
import WinBoxItem from './WinBoxItem'

const Projects = () => {
  return (
    <Fragment>
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
            <li>
              <a
                href="https://steveparot.netlify.app/"
                target="_blank"
                rel="noreferrer"
                >
                Demo
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
    </Fragment>
  )
}

export default Projects
