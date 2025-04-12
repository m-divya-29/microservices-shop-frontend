import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Orders from './components/Orders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Orders/> {/* renders whatever is returned by Orders import */}
    </>
  )
}

export default App
