import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header2 from './components/Header/Header2'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header2/>
       <Footer/>
    </div>

   
  )
}

export default App
