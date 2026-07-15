import React from 'react'
import { useState } from 'react'

const FruitArray = ({fruit}) => {
    const [fruits,setFruits] = useState(["Apple","Banana"])
    const addFruit = (fruit) => {
            setFruits(prev =>
                prev.includes(fruit) ? prev : [...prev, fruit]
            );
    }
  return (
    <div className='bg-[#283618] w-2xl  text-center  rounded-3xl flex flex-col gap-10 shadow-black shadow-md '>
        <div className='flex flex-col gap-10'>
            {fruits.map((f,index) => {
                return(
                    <h2 key={index} className='text-[#fefae0] text-2xl font-bold'> {f}</h2>

                )
            })}

        </div>

      <button onClick={() => {addFruit(fruit)}} className='bg-[#fefae0] rounded-full font-bold h-10  '>
        Add Fruit
      </button>
      
    </div>
  )
}

export default FruitArray
