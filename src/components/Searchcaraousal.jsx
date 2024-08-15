import React, { useEffect, useState } from 'react'

function Searchcaraousal() {
  const items = ['milk', 'orange', 'curd', 'hugs', 'fruits'];
  const[currentIndex,setCurrentIndex]=useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === items.length-1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col justify-start items-center'>
     <h1 className='text-center text-red-500 text-3xl mb-5'>shopping</h1> 
     <input 
     type='text'
     placeholder={`search for ${items[currentIndex]}...` }
     className='border border-2 border-blue-600 px-4 py-3 w-72 focus:outline-none placeholder-blue-500 text-xl text-blue-600'
/>
     </div>
  )
}

export default Searchcaraousal

// import React, { useEffect, useState } from 'react';

// function Searchcaraousal() {
//   const items = ['milk', 'orange', 'curd', 'hugs', 'fruits'];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(
//       prevIndex =>
//         prevIndex === items.length - 1 ? 0 : prevIndex + 1
//       )
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='flex flex-col justify-start items-center'>
//       <h1 className='text-center text-red-500 text-3xl mb-5'>Shopping</h1>
//       <div className="w-72  relative  overflow-hidden">
//         <input
//           type='text'
//           placeholder="Search for"
//           className='border border-2 border-blue-600  px-4 py-3 w-full focus:outline-none placeholder-blue-500 text-xl text-blue-600'
//         />
//         <div className="absolute left-24">
//           <div className="w-full  transition-transform duration-700 transform " style={{ transform: `translateY(-${currentIndex * 50}px)` }}>
//             {items.map((item,index) => (
//               <li
//                 key={index}
//                 className="px-4 py-4 text-blue-500 text-lg"
//                 style={{listStyleType: 'none'}}
//               >
//                 {item}
//               </li>
//             ))}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Searchcaraousal;



