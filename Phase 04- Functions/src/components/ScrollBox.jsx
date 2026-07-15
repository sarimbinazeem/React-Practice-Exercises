import React from 'react'

const ScrollBox = () => {
    const handleWheel= (event) => {
    console.log(event.deltaX);
    console.log(event.deltaY);        
    }
  return (
    <div>
      <div onWheel={handleWheel} className='bg-white w-xl h-96 overflow-y-scroll rounded-2xl' >

        <div className='h-300'></div>

      </div>
    </div>
  )
}

export default ScrollBox
