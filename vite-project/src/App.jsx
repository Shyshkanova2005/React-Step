import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header2 from './components/Header/Header2'
import Body from './components/Header/Bode'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header2/>
       <Footer/>
       <Body/>
    </div>

   
  )
}

export default App
