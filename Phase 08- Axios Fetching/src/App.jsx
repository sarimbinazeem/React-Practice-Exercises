import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
  const [user,setUser] = useState(null)

  //fetch at first rednering
  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((res) => {setUser(res.data.results[0])})
  },[])

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center '>
      {
           (!user) && (<h2>Loading...</h2>)

      }

      {
        user && (
          <div className='bg-[#d6ccc2] text-center px-20 py-30 rounded-3xl text-[#22223b] text-xl shadow-xl max-w-md'>
          <img src={user.picture.large} className="w-36 h-36 rounded-full object-cover mx-auto mb-6"/>
          <h2>{user.name.first} {user.name.last}</h2>
          <p className='break-words'>{user.email} </p>
          </div>
        )
      }
    
    </div>
  )
}

export default App