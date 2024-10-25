import React,{useState} from 'react'
import useDebounce from '../hooks/useDebounce'

function Debouncetwo() {



    const length = 10; // desired length of the random string
const randomStrings = Array(2000).fill().map(() => Math.random().toString(36).slice(2).repeat(length / 10));
    const[input,setInput]=useState('')

    const debouncedInput=useDebounce(input,500)

    const handleChange=(e)=>{
        setInput(e.target.value)
    }

  return (
    <>
    <div className='flex flex-col items-center mt-3'>
        <input 
        value={input}
        onChange={handleChange}
        type='text'
        placeholder='search'
        className='px-2 py-3 focus:outline-none border border-gray-400 w-1/3 rounded-md'
        />

<ul>
          {debouncedInput.length > 0 // Check if debounced input is not empty
            ? randomStrings
                .filter((item) => item.toLowerCase().includes(debouncedInput.toLowerCase()))
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))
            : input.length > 0 // If debounced input is empty, but input is not empty
              ? [] // Show no results
              : randomStrings.map((string, index) => (
                  <li key={index}>{string}</li>
                ))}
        </ul>
    </div>
      
    </>
  )
}

export default Debouncetwo

