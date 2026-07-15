import React from 'react'
import {useState} from 'react'

const BackGroundColor = () => {

    const [color,setColor] = useState("#606c38")

    const colorChanger = () =>
    {
      setColor(
          color === "#283618"
              ? "#bc6c25"
              : "#283618"
      );
    }

  return (
    <div    style={{
        backgroundColor: color,
        height:"200px",
        width: "200px",
        display: "flex",
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:'20px',
        padding: '20px 20px'

      }}>
       <button
        onClick={colorChanger} className='bg-[#fefae0] rounded-full font-bold h-10 w-full'
      >
        Change Color
      </button>     
    </div>
  )
}

export default BackGroundColor
