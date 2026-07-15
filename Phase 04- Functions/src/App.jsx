import React from 'react'
import ScrollBox from './components/ScrollBox'
import Form from './components/Form'

const App = () => {
  return (
    <div className='h-screen w-full flex flex-nowrap justify-center items-center gap-10'>
      <ScrollBox />
      <Form />
    </div>
  )
}

export default App
