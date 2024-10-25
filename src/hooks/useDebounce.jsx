// import React, { useEffect, useState } from 'react'

// function useDebounce(input ,delay) {

//   const[value,setValue]=useState('')
// useEffect(()=>{
//   const timer=setTimeout(() => {
//     setValue(input)
//   }, delay);

//   return()=>{
//     clearTimeout(timer)
//   }
// },[input,delay])
// }

// export default useDebounce;




import React, { useEffect, useState } from 'react';

function useDebounce(input, delay=600) {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [input, delay]);

  return debouncedValue;
}

export default useDebounce;

