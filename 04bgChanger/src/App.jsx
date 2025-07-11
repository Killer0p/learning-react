import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
  
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">

      {/* Button-1 */}

      <button onClick={() => setColor('red')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
        style={{ backgroundColor: "red" }}
      >Red
      </button>

      {/* Button-2*/}

      <button onClick={() => setColor('green')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
        style={{ backgroundColor: "Green" }}
      >Green
      </button>

          {/* Button-3 */}

      <button onClick={() => setColor('blue')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
        style={{ backgroundColor: "Blue" }}
      >Blue
      </button>

       {/* Button-4 (Olive) */}
      <button onClick={() => setColor('olive')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
        style={{ backgroundColor: "olive" }}
      >
        Olive
      </button>

      <button onClick={() => setColor('Gray')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
        style={{ backgroundColor: "Gray" }}
      >
        Gray
      </button>

      <button onClick={() => setColor('yellow')}
        className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
        style={{ backgroundColor: "yellow" }}
      >
        Yellow
      </button>

      <button onClick={() => setColor('pink')}
        className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
        style={{ backgroundColor: "pink" }}
      >
        Pink
      </button>
     
     <button onClick={() => setColor('purple')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
        style={{ backgroundColor: "purple" }}
      >
        Purple
      </button>


      <button onClick={() => setColor('lavender')}
        className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
        style={{ backgroundColor: "lavender" }}
      >
        Lavender
      </button>


      <button onClick={() => setColor('white')}
        className="outline-none px-4 py-1 rounded-full text-black shadow-sm"
        style={{ backgroundColor: "white" }}
      >
        White
      </button>

      <button onClick={() => setColor('black')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
        style={{ backgroundColor: "black" }}
      >
        Black
      </button>


    </div>
  </div>
</div>
    </>
  )
}

export default App
