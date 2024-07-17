import { useState } from "react"

function App() {
  const [color,setcolor]=useState("olive")
  return (
    <>
      <div className='w-full h-screen flex justify-center' style={{ backgroundColor: color }}>
        <div className="flex flex-wrap p-1 fixed bottom-6  text-white bg-white rounded-2xl">
          <button onClick={()=>{setcolor('#b91c1c')}} className="bg-red-700 px-2 py-1 rounded-xl mx-2">Red</button>
          <button onClick={()=>{setcolor('#15803d')}} className="bg-green-700 px-2 py-1 rounded-xl mx-2">Green</button>
          <button onClick={()=>{setcolor('#374151')}} className="bg-gray-700 px-2 py-1 rounded-xl mx-2">Gray</button>
          <button onClick={()=>{setcolor('#ca8a04')}} className="bg-yellow-600 px-2 py-1 rounded-xl mx-2">Yellow</button>
          <button onClick={()=>{setcolor('#1d4ed8')}} className="bg-blue-700 px-2 py-1 rounded-xl mx-2">Blue</button>
          <button onClick={()=>{setcolor('#c2410c')}} className="bg-orange-700 px-2 py-1 rounded-xl mx-2">Orange</button>
          <button onClick={()=>{setcolor('#92400e')}} className="bg-amber-800 px-2 py-1 rounded-xl mx-2">Brown</button>
          <button onClick={()=>{setcolor('#047857')}} className="bg-emerald-700 px-2 py-1 rounded-xl mx-2">Emerald</button>
          <button onClick={()=>{setcolor('#6d28d9')}} className="bg-violet-700 px-2 py-1 rounded-xl mx-2">Violet</button>
          <button onClick={()=>{setcolor('#e11d48')}} className="bg-rose-600 px-2 py-1 rounded-xl mx-2">Rose</button>
        </div>
      </div>
    </>
  )
}

export default App
