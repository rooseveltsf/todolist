import { useState } from 'react'
// import './App.css'

import './global.css'
// import Styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  )
}

export default App
