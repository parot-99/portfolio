import { Fragment, useRef } from 'react'
import generateWinBox from './../generateWinBox'

const WinBoxItem = (props) => {
  const ref = useRef()

  return (
    <Fragment>
      <li onClick={() => generateWinBox(props.title, ref)}>{props.value}</li>
      <article className="hidden">
        <div ref={ref}>
          <h2>
            {props.terminalTitle}:$ <span className="cursor">|</span>
          </h2>
          {props.children}
        </div>
      </article>
    </Fragment>
  )
}

export default WinBoxItem
