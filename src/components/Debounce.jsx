




import React, { useState, useEffect } from 'react';
// import useDebounce from '../hooks/useDebounce'
import debounce   from 'lodash.debounce'

function Debounce() {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([])

  // const debouncedValue=useDebounce(input,500)

  // useEffect(() => {
  //   if (input !=='')
  //    {
  //     // Make a request to your backend server with the input value
  //     fetch(`http://127.0.0.1:8000/product-categories?search=${input}`)
  //       .then(res => res.json())
  //       .then(data => {
  //           console.log(data);
  //         setSearchResults(data); // Update search results based on the response
  //       })
  //       .catch(error => {
  //         console.error('Error fetching data:', error);
  //       });
  //   } 
  //   else if(input==='') {
  //     // Clear search results if input is empty
  //     setSearchResults([]);
  //   }
  // }, [input]);



  useEffect(()=>{
    const debouncedValue=()=>{
      if (input !==''){
           fetch(`http://127.0.0.1:8000/product-categories?search=${input}`)
        .then(res => res.json())
        .then(data => {
           
          setSearchResults(data); 
        
          console.log("api called")
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
    else if(input===''){
      setSearchResults([])
    }
  }
  const debouncedFetchData=debounce(debouncedValue,300)
  debouncedFetchData();

  return()=>{
    debouncedFetchData.cancel();
  }
  },[input])

  const handleInput = (e) => {
    let inputValue=e.target.value.charAt(0).toLowerCase()+e.target.value.slice(1);
  //  let inputValue=e.target.value
    setInput(inputValue);
    // console.log(input)
  };

  return (
    <div className='flex flex-col justify-start items-center mt-5'>
      <input 
        type='text' 
        placeholder='search'
        className='px-4 py-3 w-1/3 border border-purple-600 border-2 focus:outline-none bg-purple-500 text-black opacity-50 placeholder-black text-xl'
        value={input}
        onChange={handleInput}
      />

<div className='w-1/3  border border-purple-600 border-2 '>
        {/* Render search results */}
        { searchResults.slice(0,6).map(result => (
          <div key={result.id}>
            <div className='py-3 flex space-x-3'>
              <img src={result.category_image} alt='image' 
              className='size-12'/>
            <p className='text-xl'>{result.category_name}</p>
          </div>
          </div>
            
        ))}
      </div> 


      </div>


      



    
  
      
    
  );
}

export default Debounce;
      
      
      
