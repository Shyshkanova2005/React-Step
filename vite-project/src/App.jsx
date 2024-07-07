import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header2 from './components/Header/Header2'
import Body from './components/Header/Bode'
import Data from './components/Data/Data'
import SimpleCalculator from './Calculator'





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Header2/>
      <Data/>
       <Footer/>
       <Data/>
       <Body/>
       <Data/> */}
       <SimpleCalculator/>
       
    </div>

   
  )
}

export default App

