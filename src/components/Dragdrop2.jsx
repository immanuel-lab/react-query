// import React from 'react'

// function Dragdrop2() {
//   return (
//     <>
//     <div className='flex justify-center items-center h-screen'>
    
//     <div 
//     draggable="true"
//     className='p-4 bg-green-400'>
//             drag this
//     </div>
//     </div>
      
//     </>
//   )
// }

// export default Dragdrop2;


// import React, { useState } from 'react';

// function Dragdrop2() {
//   const [draggedElement, setDraggedElement] = useState(null);

//   const handleDragStart = (e) => {
//     setDraggedElement(e.target);
//     // e.dataTransfer.setData('text/plain', e.target.id);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     if (draggedElement) {
//       e.target.appendChild(draggedElement);
//       setDraggedElement(null); // Reset the state
//     }
//   };

//   return (
//     <>
//       <div className='flex justify-center items-center h-screen'>
//         {/* Draggable Element */}
//         <div
//           id="draggable-element"
//           draggable="true"
//           onDragStart={handleDragStart}
//           className='p-4 bg-green-400'
//         >
//           drag this
//         </div>

//         {/* Drop Zone */}
//         <div
//           onDrop={handleDrop}
//           onDragOver={handleDragOver}
//           className='p-4 bg-gray-200 ml-4 h-20 w-40 flex justify-center items-center'
//         >
//           Drop here
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dragdrop2;



// drag and drop into any place

// import React, { useState } from 'react';

// function Dragdrop2() {
//   const [position, setPosition] = useState({ x: 550, y: 250 }); // Initial position


//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
    

//     setPosition({
//       x: e.clientX ,
//       y: e.clientY 
//     });
//   };

//   return (
//     <>
//       <div
//         className='relative w-full h-screen bg-gray-100'
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//       >
//         {/* Draggable Element */}
//         <div
//           draggable="true"
   
//           style={{
//             position: 'absolute',
//             top: `${position.y}px`,
//             left: `${position.x}px`,
//             cursor: 'grab'
//           }}
//           className='p-4 bg-green-400 text-white rounded-md shadow-lg'
//         >
//           Drag this
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dragdrop2;







// import React, { useState } from 'react';

// function Dragdrop2() {
//   const [position, setPosition] = useState({ x: 100, y: 100 }); 

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const offsetX = e.dataTransfer.getData('drag-offset-x');
//     const offsetY = e.dataTransfer.getData('drag-offset-y');

//     setPosition({
//         x: e.clientX - offsetX,
//         y: e.clientY - offsetY
//       });

   
   
// };

//   return (
//     <div
//       className='relative w-full h-screen bg-gray-100'
//       onDragOver={handleDragOver}
//       onDrop={handleDrop}
//     >
//       {/* Draggable Element */}
//       <div
//         draggable="true"
//         style={{
//           position: 'absolute',
//           top: `${position.y}px`,
//           left: `${position.x}px`,
//           cursor: 'grab'
//         }}
//         className='p-4 bg-green-400 text-white rounded-md shadow-lg'
//       >
//         Drag this
//       </div>
//     </div>
//   );
// }

// export default Dragdrop2;


