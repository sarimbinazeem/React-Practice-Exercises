import React from 'react'
import { useState  } from 'react'

const DisplayParagraph = ({text}) => {
    
    const [show,setShow] = useState(true)
    
    const useShowPara = () => {
        setShow(!show)
    }
    return (

    <div className='bg-[#283618] w-2xl text-center  rounded-3xl flex flex-col gap-10 shadow-black shadow-md '>
      <button onClick={useShowPara} className='bg-[#fefae0] rounded-full font-bold h-10 '>
        Toggle For Surprise!
      </button>

      {show && <p className='text-[#fefae0] text-2xl font-bold'>{text}</p>}
    </div>
  )
}

export default DisplayParagraph
