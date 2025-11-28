import { useState } from 'react' //we can take hooks from here by importing them
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let [counter, setCounter] = useState(10) // using useState hook
  // let counter = 15 -> this does't reflect in UI

  function addValue() {
    console.log(counter);
    //  counter = counter + 1
    setCounter(counter + 1)

  }

  function removeValue() {
    // counter = counter - 1
    console.log(counter);
    setCounter(counter - 1)
    }



    return (
    <>
      <h2>Hello i am react js</h2>
      <p>Counter value : {counter}</p>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>

  )


  }

  

export default App



/*
  ===== Classic React Gotcha & Power of useState =====

  1. Problem:
     - `let counter = 15` is a normal variable.
     - Updating it (counter = counter + 1) does NOT re-render the UI.
     - console.log(counter) shows the updated value in console,
       but the <p> in the UI still shows the initial value.
     - React does NOT track normal variables.

  2. React Way:
     - useState() creates reactive state.
     - Example: const [counter, setCounter] = useState(15)
     - Updating via setCounter automatically re-renders the component.

  3. Key Concept:
     - React is declarative: You describe WHAT the UI should look like
       for a given state.
     - No need for getElementById or manual DOM updates.
     - JSX + state = dynamic UI made simple and efficient.

  4. Fix for this example:
     function addValue() { setCounter(prev => prev + 1); }
     function removeValue() { setCounter(prev => prev - 1); }

  ===== Takeaway =====
  - Always use state for dynamic data in React.
  - Regular variables cannot trigger re-renders.
  - This is one of the main powers of React.

*/