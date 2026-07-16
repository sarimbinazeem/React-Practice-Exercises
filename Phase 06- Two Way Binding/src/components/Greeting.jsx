import React from 'react'
import { useState } from 'react'

const Greeting = () => {
    const [name, setName] = useState("")
    const [greeting, setGreeting] = useState("")
    
    const handleSubmit= (e) => {
        e.preventDefault()

        setGreeting(`Hello ${name} !`)
        setName("")
    }

  return (
    <div className='bg-[#fff3b0] py-15 px-10 rounded-2xl shadow-black shadow-xl '>
      <form onSubmit={handleSubmit}>
        <input value={name} placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} className='duration-300 ease-in bg-[#e09f3e] w-full py-2 px-2 rounded-xl text-[#540b0e] focus:outline-2 focus:outline-[#9e2a2b] mb-5 '/>
        <button type="submit" className='bg-[#9e2a2b] text-white font-bold px-5 py-2 rounded-full ml-50 hover:bg-[#540b0e] hover:-translate-y-1 duration-300 ease-in'>Generate Greeting</button>
        <h2 className='mt-10 font-bold text-2xl text-[#540b0e]'>{greeting}</h2>
      </form>
    </div>
  )
}

export default Greeting
