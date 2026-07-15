import React from 'react'
import DisplayParagraph from './components/DisplayParagraph'
import BackGroundColor from './components/BackGroundColor'
import FruitArray from './components/FruitArray'

const App = () => {
  let fruit = 'Orange'
  let paragraph= "Hey I am A Secret Text"

  return (
    <>
      <div className='h-screen w-full flex flex-nowrap justify-center items-center gap-10 '>
        <DisplayParagraph text={paragraph}/>
        <BackGroundColor />
        <FruitArray fruit={fruit} /> 
      </div>
    </>
  )
}

export default App
