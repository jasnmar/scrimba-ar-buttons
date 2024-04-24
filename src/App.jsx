import { useState } from 'react'
import './App.css'
import Button from './component/Button/Button'
import { FaMoneyBill } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function App() {
  const [count, setCount] = useState(0)

/**
 * Challenge: Add an onClick handler to the Button
 * component instance (the one on this page). Then
 * make whatever changes you need for it to actually
 * work.
 * 
 * Clicking the button should log "Logging in..." 
 * to the console.
 */

  function handleBtnClick(e) {
    console.log("Logging in...")
  }

  return (
    <main>
      <Button size="lg"><FcGoogle /> Log in with Google</Button>
    </main>
  )
}

export default App
