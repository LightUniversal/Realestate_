import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";

import Header from './Components/Header'
import Footer from './Components/Footer'






function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Header />
       <main>
        <Outlet />
       </main>
       <Footer />
      </div>
      
    </>
  )
}

export default App
