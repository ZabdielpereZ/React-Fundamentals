import { useState } from 'react'
// import './App.css'
import Header from './Header'
import About from './About'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
      <Contact />
    </>
  )
}

export default App
