import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <nav>
        <ul className='flex justify-between '>
          <li><a href="#">Home</a></li>
          <li><a href="#" className='text-2xl'>Home</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Home</a></li>
        </ul>
      </nav>

    </>
  )
}

export default App