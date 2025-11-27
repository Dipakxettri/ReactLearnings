import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hello from './Hello.jsx'


function MyApp(){
  return(
    <div>
      <h1>Hello i am custom MyApp</h1>
    </div>
  )
}

// just trying to give react a object directally - Error
const reactElement = {
    type : 'a',
    props: {
        href: 'htts://google.com',
        target: '_blank',

    },
    children: "click me to visit google"
}


createRoot(document.getElementById('root')).render(

  <StrictMode>


    <App /> 
    
    {/* <Hello /> -> this is actually a function can be call as Hello() */}

    <MyApp />

    {/* reactElement -> here this will return an error as react is expecting valid jsx element but we gave object directly */}

  </StrictMode>


)