import { useState } from 'react'
import './App.css'
import Button from './component/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  /**
 * Challenge: 
 * 
 * Build a Button component in a separate file.
 * (For styling purposes, make sure it renders an HTML <button> element)
 * Your button component should take a `text` prop
 */
  return (
    <main>
      {/* Your custom Button component here */}
      <Button text="fancy button text"/>
    </main>
  )
}

export default App
