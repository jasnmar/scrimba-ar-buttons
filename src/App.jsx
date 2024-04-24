import { useState } from 'react'
import './App.css'
import Button from './component/Button/Button'
import { FaMoneyBill } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function App() {
  const [count, setCount] = useState(0)

  function handleBtnClick(e) {
    console.log("Logging in...")
  }

  return (
    <main>
      <Button variant="warning" size="lg"><FcGoogle />Log in with Google</Button>
    </main>
  )
}

export default App
