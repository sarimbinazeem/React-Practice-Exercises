import React from 'react'

const Form = () => {
    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form Submitted");
    }
  return (
    <form onSubmit={handleSubmit} className='w-2xl text-center bg-blue-200 py-60 rounded-3xl flex flex-col gap-20'>
        <input type="text" className="
            bg-white
            text-black
            rounded-xl
            px-5
            py-3
            " />
        <button type='submit' className='bg-blue-500 rounded-full cursor-pointer text-2xl font-bold py-3'> Submit</button>
    </form>
  )
}

export default Form
