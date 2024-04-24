import { useState } from 'react'
import './App.css'
import Button from './component/Button/Button'

function App() {
  const [count, setCount] = useState(0)

/**
 * Challenge: Make the Button accept and display children.
 * 
 * Change the text to say "Buy now!" so it's less boring 🥱
 */

  return (
    <main>
      {/* Your custom Button component here */}
      <Button>Buy now!</Button>
    </main>
  )
}

export default App
