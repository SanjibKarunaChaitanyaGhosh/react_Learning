import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <>
    <h3>Hooks</h3>
    <ul>
        <li>
            <Link to="/usestate">USE-STATE</Link>
        </li>
        <li>
            <Link to='/jsonplaceholder'>Get data, application of USE-STATE</Link>
        </li>
        <li>
            <Link to="/useeffects">Use-EFFECT</Link>
        </li>
        <li>
          <Link to="/passingstatesasprops">PassingStateAsProps</Link>
        </li>
        <li>
          <Link to="/lifitingstateup">Lifting State Up</Link>
        </li>
        <li>
          <Link to="/propsdrilling">Props Drilling</Link>
        </li>
        <li>
          <Link to="useref">useRef</Link>
        </li>
        <li>
          <Link to="eventhandling">Event Handling</Link>
        </li>
        <li>
          <Link to="/form">Forms handling</Link>
        </li>
        <li>useContext</li>
        <li>useReducer</li>
        <li>useMemo</li>
        <li>useCallback</li>
    </ul>
    </>
  )
}

export default Hooks