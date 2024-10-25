// import React, { useState } from 'react'
// import  InfiniteScroll from 'react-infinite-scroll-component'


// function Infinitescroll() {
//     const arr=Array.from({length:20})
//     const [items,setItems]=useState(arr)

//     const elementStyle="border  py-3 px-5 border-blue-500 mb-2"

//     const fetchData=()=>{
//         // setTimeout(() => {
            
//         //     setItems(items.concat(Array.from({length:40})))
//         // }, 2000);
        
//         setItems(items.concat(Array.from({length:40})))
    
//     }

//   return (
//     <div className='flex flex-col items-center mt-10'>
//         <h1 className='text-2xl text-[#b60a57] uppercase mb-4'>Infinite scroll</h1>
//     <div>
//         <InfiniteScroll 
//         dataLength={items.length}
//         next={fetchData}
//         hasMore={true}
//         loader={<h4>loading....</h4>}
//         >
//             {items.map((item,index)=>{
//                 return (
//                 <div 
//                 className={elementStyle}
//                 key={index}>
//                  <p> this is {index} item   </p>
//                     </div>
//                 )
//             })}
//         </InfiniteScroll>
//     </div>
//     </div>
//   )
// }

// export default Infinitescroll





import { useEffect, useState } from 'react';

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState(null)

  useEffect(() => {
    
    const url='http://localhost:5000/items'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data)
      }).catch((error)=>setError(error))
      .finally(()=>setLoading(false))
  }, []); 



return(
    <div className='flex flex-col items-center'>
    {loading && <div>loading...</div>}
    {error && <div>{error.message}</div>}
    {!loading && !error && data&&<div>{data.map((item,index)=>{
        return <div 
        key={index}
        className='border-2 border-purple-700 mb-3 text-center'
        >
            {item.id}<br></br>{item.name}<br></br>{item.category}
            </div>
    })}</div>}

    </div>

)



}

export default InfiniteScroll;