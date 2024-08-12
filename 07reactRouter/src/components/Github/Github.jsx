import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {
    const data=useLoaderData();
    // const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/shreshtsharma')
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    //     .then(console.log(data))
    // },[]);
    
  return (
    <>
    <div className='text-center m-4 bg-gray-700 text-white text-3xl p-3'>Github Followers : {data.followers}
    <img src={data.avatar_url} width={300} alt="git picture" />
    </div>
        
    </>
  )
}

export default Github

export const githubInfoLoader=async() => {
    const response=await fetch("https://api.github.com/users/shreshtsharma");
    return response.json();
}