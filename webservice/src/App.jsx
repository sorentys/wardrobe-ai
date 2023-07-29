import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import ReactCanvasPaint from 'react-canvas-paint'
import 'react-canvas-paint/dist/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>Handwriting Calculator</h1>
          <ReactCanvasPaint />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
