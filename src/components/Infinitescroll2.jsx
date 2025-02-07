import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Infinitescroll2() {

  const[isLoading,setIsLoading]=useState(false)
  const[data,setData]=useState([])
const[error,setError]=useState(false)
const[hasNextPage,setHasNextPage]=useState(true)
const [pageNumber, setPageNumber] = useState(1);



useEffect(()=>{
 const abortController = new AbortController();
const loadData= async () => {
  

  setIsLoading(true);
  try {
    
    const response = await axios.get(`http://localhost:8000/product-categories?page=${pageNumber}`
    , {
      signal: abortController.signal,
    }
  );

   
    
  setData(prevData => [...prevData, ...response.data.results]);


   if(!response.data.next){
    setHasNextPage(false)
   }
  
  } catch (error) {
  setError(error.message)
  } finally {
    setIsLoading(false);
  }
};

loadData()
return ()=> abortController.abort() 
},[pageNumber])






  const handleScroll = () => {
    // console.log(window.innerHeight)
    
    if ( window.scrollY +window.innerHeight >= document.body.offsetHeight-50) {
      if (hasNextPage) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    }
  };


useEffect(()=>{
window.addEventListener("scroll",handleScroll)
return()=>window.removeEventListener("scroll",handleScroll)
},[hasNextPage])



  return (
    <div className='flex flex-col items-center gap-y-10'>
      <p className='text-4xl'>food center</p>
      {isLoading && <p>....loading</p>}
      {error && <p>{error}</p>}
      {data.map((item,index)=>(
<div key={index} className='mb-2'>
{item.id}
{item.category_name}
<img src={item.category_image} width={350} height={40}/>

</div>
)
)      

      }
{!hasNextPage && <p className='mb-2'>end of results...</p>}

    </div>
  )
}




