// import { useState } from "react"
import './app.css'
import CountryCard from './Components/CountryCard'

function App() {
  
  return (
    <>
      <nav>
        <header>
          What in the world?
        </header>
        <input type="search" placeholder='Search countries here...' />
      </nav>
      <main>
        <CountryCard />
      </main>
    </>
  )
}

export default App
