
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let [counter, setCounter] = useState(15)

//   const addValue = () => {
//     console.log('clicked', counter)
//     setCounter(counter + 1)
//   }

//   const removeValue = () => {
//     setCounter(counter - 1)
//   }

//   return (
//     <>
//       <h1>Ribesh Raut</h1>
//       <h2>Counter value: {counter}</h2>
//       <button onClick={addValue}>Add value</button>
//       <br/>
//       <button onClick={removeValue}>Remove value</button>
//     </>
//   )
// }

// export default App



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    } else {
      alert("Counter can't go above 10!")
    }
  }

  const removeValue = () => {
    if (counter > -5) {
      setCounter(counter - 1)
    } else {
      alert("Counter can't go below -5!")
    }
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
