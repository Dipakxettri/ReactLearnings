// import { StrictMode } from 'react' -> cannot import strict mode two times
import React, { StrictMode } from 'react'; // additional import for dev 
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
// const reactElement = {
//     type : 'a',
//     props: {
//         href: 'htts://google.com',
//         target: '_blank',

//     },
//     children: "click me to visit google"
// }


// but this will work
const AnotherElement = (
  <a href="https://google.com" target='_blank'>DO visit</a>
)



let userID = 20;


// ------- Lets see how react works create elements under the hood -------
const newReactElement = React.createElement(
  // The syntax is pre defined not like in our custom react where we use our own syntax

  'a', // actual tag
  {hrefs: "href://google.com", target: "_blank"}, // This add proproties
  'click me', // Text 

  userID //This works
)





createRoot(document.getElementById('root')).render(

  <StrictMode>


    <App /> 

    {/* <Hello /> -> this is actually a function can be call as Hello() */}

    <MyApp />

    {/* reactElement -> here this will return an error as react is expecting valid jsx element but we gave object directly */}

    {AnotherElement}
    {/* {AnotherElement} -> this works it use Babel*/}


    {/* lets give that react element */}
    {newReactElement}

  </StrictMode>


)