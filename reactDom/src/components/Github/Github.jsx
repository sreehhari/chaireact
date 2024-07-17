import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sreehhari')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])
    const data =useLoaderData();

  return (
    <>
    <div className='text-center m-4 p-4 bg-gray-600 text-white text-3xl font-bold '>GitHub Followers :{data.followers} 

        <img src={data.avatar_url} alt="githubProfile" />
    </div>
    
    </>
)
}

export default Github


export const gitApiLoader = async()=>{
    const response =await fetch ('https://api.github.com/users/sreehhari')
    return response.json()
}