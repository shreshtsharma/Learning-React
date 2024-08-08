import { useCallback, useEffect, useRef, useState } from 'react'
import React from 'react'

import './App.css'

function App() {


  
 const [length,setLength]=useState(8);
 const [charAllowed,setCharAllowed]=useState(false);
 const [numAllowed,setNumAllowed]=useState(false);
 const [password,setPassword]=useState("");


 const passwordGenerator=useCallback(()=>{let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(charAllowed) str+="!@#$%^&*-_+=[]{}~`";
  if(numAllowed) str+="0123456789";

  for(let i=1;i<=length;i++)
  {
    let randInd=Math.floor((Math.random()*str.length+1));
    pass+=str.charAt(randInd);
  }
  setPassword(pass);
},[length,charAllowed,numAllowed,setPassword]
)

const passRef=useRef(null);

function copyToClip(){
  // passRef.current?.setSelectionRange(0, 3);
  window.navigator.clipboard.writeText(password);
  passRef.current?.select();

}
useEffect(()=>{
  passwordGenerator();
},[charAllowed,numAllowed,length,passwordGenerator])

  return (
    <>
    <div className="bg-slate-600 w-2/3 h-40 rounded-lg text-green-500 m-auto">
      <label htmlFor="inp" className='text-2xl mx-2'> password</label>
      <input className="my-5 p-2 rounded-l-lg font-bold" placeholder="password"type="text" value={password} readOnly id="inp"
        ref={passRef}
      />
      <button className='bg-yellow-500 p-2 font-bold rounded-r-lg' onClick={copyToClip}>copy</button>
      <div className='flex justify-center gap-2 text-xl' >
        <label htmlFor="length" className='mx-2 '>Length : {length}</label>
        <input type="range" min={6} max={100} className='cursor-pointer' value={length} id="length" 
          onChange={(e)=>{setLength(e.target.value)}}
        />
        <label htmlFor="char">Character</label>
        <input type="checkbox" id="char" value={charAllowed}
          onChange={(e)=>setCharAllowed((char)=>!char)}
        />
        <label htmlFor="num">Number</label>
        <input type="checkbox" name="num" id="num" value={numAllowed}
          onChange={(e)=>setNumAllowed((prevNum)=>!prevNum)}
        />
      
      </div>
    </div>
    
    </>
  )
}

export default App
