import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"shresht",
    age:"21"
  }
  return (
    
    <>
      <Card name="shresht sharma" btnText="View me"/>
      <Card name="shreya"/>
   </>
  )
}

export default App
