import React, { useEffect, useState } from 'react'


const App = () => {
  const [count,setCount] = useState(0)

  const [dark,setDark] = useState(false)

  //toggle
  useEffect(() => {
    localStorage.setItem("dark",JSON.stringify(dark))
  },[dark])
  
  // for the first time 
  useEffect(() => {
    const saved= JSON.parse(localStorage.getItem("dark"))

    if(saved !== null)  setDark(saved)
  },[])

  // When state changes
  useEffect(() => {
    const visits = Number(localStorage.getItem("visits"))  || 0
    const updated= visits +1

    localStorage.setItem("visits",updated)

    setCount(updated)
  },[])


  return (
    <div style={{
      backgroundColor: dark ? "#222" : "white",
      color: dark ? "white" : "black",
      height: "100vh"
    }} className='flex flex-wrap justify-center items-center flex-col '>
      <div className='bg-[#588157] p-20 text-center rounded-full '>
        <h1 className='text-4xl font-bold mb-10'>Welcome!</h1>
        <h2>You've visited this page {count} {count === 1 ? "time" : "times"}.</h2>
      </div>     

      <button onClick={() => setDark(prev => !prev)} className='bg-[#588157] mt-20 p-5 rounded-full '>{dark ? "Light Mode" : "Dark Mode"}</button>      
    </div>
  )
}

export default App