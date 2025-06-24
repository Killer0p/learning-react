import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 

    if (numberAllowed) 
      str += "0123456789"
    
    if (charAllowed) 
      str += "!@#$%^&*()_+[]{}|;:,.<>?`~"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length +1)
      pass += str.charAt(char)

    }

    setPassword(pass)
   
  },
   [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])
   
   

 
   useEffect(() => {
    passwordGenerator()
   }, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>  
  <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
  <div className="w-full max-w-md mx-auto bg-gray-800 text-orange-500 rounded-lg shadow-md p-6">
  
    
    {/* Title */}
    <h1 className="text-center text-white text-xl font-bold my-3 mb-10">
      Password Generator</h1>



    {/* Password Display Box */}
    <div className="flex items-center shadow-inner rounded-md overflow-hidden bg-white-900">  
      <input 
        type="text"
        value={password}
        className="w-full bg-white text-gray-800 outline-none mb-3 py-2 px-4 rounded-l-lg"
        placeholder="Password"
        readOnly
        ref = {passwordRef}
      />
      <button
          onClick={copyPasswordtoClipboard}
          className="outline-none bg-blue-700 text-white hover:bg-green-600 hover:text-black transition duration-300 py-2 px-4 mb-3 shrink-0">
          copy
</button>

    </div>

  <div className="flex text-sm gap-x-2">
  <div className="flex items-center gap-x-1">
    <input 
      type="range"
      min="8"
      max="100"
      value={length}
      className="cursor-pointer"
      onChange={(e) => setLength(e.target.value)}
    />
    <label>Length: {length}</label>
  </div>
  <div className="flex items-center gap-x-1">
    <input 
          type="checkbox"
          checked={numberAllowed}
          id="numberAllowed"
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
        />
        <label htmlFor="numberAllowed">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
          type="checkbox"
          checked={charAllowed}
          id="charAllowed"
          onChange={() => {
            setcharAllowed((prev) => !prev)
          }}
        />
        <label htmlFor="charAllowed">Characters</label>
      </div>
    </div>

  </div>
</div>

    </>
  )
}

export default App
