// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   // let counter = 15;
// const [counter, setCounter] = useState(15)
// const addValue = () => {
//   console.log('clicked',counter())
//   counter = counter + 1;
 
// }
//   return (
//     <>
//       <h1>Ribesh Raut</h1>
//       <h2>Counter value: {counter}</h2>
//       <button onClick={addValue()}>Add value</button>
//       <br/>
//       <button>Remove value</button>
//     </>
//   )
// }

// export default App






import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log('clicked', counter)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Ribesh Raut</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
