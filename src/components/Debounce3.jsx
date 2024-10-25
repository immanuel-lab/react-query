import React, { useState } from 'react'

function Debounce3() {
    const [input ,setInput]=useState('hello')

    const handleChange=(e)=>{
        setInput(e.target.value)
    }

  return (
    <div className='flex flex-col items-center mt-2'>
    <input 
    type='text'
    value={input}
    onChange={handleChange}
    className='px-2 py-3 w-1/3 focus:outline-none border border-2 border-blue-500'
    />
    
    </div>
  )
}

export default Debounce3
