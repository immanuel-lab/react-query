import React, { useState } from 'react'

function Inputbox({input,value}) {

  return (
    <>
     <input 
     type='text'
     placeholder='seach...'
     className='px-4 py-2 focus:outline-none  border-2 border-blue-600 rounded-md text-blue-500'
     value={value}
     onChange={input}
     /> 
    </>
  )
}

export default Inputbox
