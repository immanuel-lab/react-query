// import React, { useState, useRef } from 'react';

// function Dragdrop() {
//   const [file, setFile] = useState([]);
//   const[showFiles,setShowFiles]=useState(false)
//   const[drag,setDrag]=useState(false)


//   const fileRef = useRef();

  
//   const handleFileChange = (e) => {
//     const newFiles = Array.from(e.target.files);
//     setFile((prevFiles) => [...prevFiles, ...newFiles]);
//   };

//   const handleUploadButtonClick = () => {
//     fileRef.current.click();
//   };

//   const handleDragover=(e)=>{
//     e.preventDefault();
//   }

    
//   const handleDrop=(e)=>{
//     e.preventDefault();
//     const newFiles = Array.from(e.dataTransfer.files);
//     setFile((prevFiles) => [...prevFiles, ...newFiles]);
//     setDrag(true)
//   }

//   return (
//     <div className='flex justify-center items-center h-screen'>
//       <div className='h-96 w-1/3 border border-dashed border-blue-700 border-2'>
//         <div className='flex flex-col items-center justify-center h-full gap-y-4'>
       
       
       
       
//        {drag===false && <div>
//         <p className='text-xl'>drag and drop files here</p>
//           <p className='text-xl'>or</p>

//           <input
//             type='file'
//             multiple
//             hidden
//             onChange={handleFileChange}
//             ref={fileRef}
//           />
//           <button
//             onClick={handleUploadButtonClick}
//             className='bg-gray-300 p-2 rounded-lg'
//           >
//             Upload Files
//           </button>

//    {file.length>0 && 
//    <p 
//   onMouseEnter={()=>{setShowFiles(true)}}
//   onMouseLeave={()=>{setShowFiles(false)}}
//   className='cursor-pointer'
//   >
//   { file.length} files chosen
//    </p>
//    }

// {showFiles && (
//             <div className="absolute bottom-0 bg-black text-white p-4">
//               {file.slice(0,5).map((f, index) => (
//                 <p key={index}>{f.name}</p>
//               ))}
//             </div>
//           )}


//                 </div>

//         }


// {drag && 
// <div onDragOver={handleDragover} onDrop={handleDrop}>
// {file.map((f, index) => (
//                 <p key={index}>{f.name}</p>
//               ))}
  
//   </div>}


//         </div>
              
//       </div>
  
           
          
//     </div>
//   );
// }

// export default Dragdrop;



import React, { useState, useRef } from 'react';

function Dragdrop() {
  const [file, setFile] = useState([]);
  const [showFiles, setShowFiles] = useState(false);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef();

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFile((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleUploadButtonClick = () => {
    fileRef.current.click();
  };

  const handleDragover = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const handleDragEnter = () => {
    setDrag(true);
  };

  const handleDragLeave = () => {
    setDrag(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFile((prevFiles) => [...prevFiles, ...newFiles]);
    setDrag(false);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div
        className='h-96 w-1/3 border border-dashed border-blue-700 border-2'
        onDragOver={handleDragover}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className='flex flex-col items-center justify-center h-full gap-y-4'>
          {drag ? (
            <p className='text-xl'>Drop files here</p>
          ) : (
            <div>
              <p className='text-xl'>Drag and drop files here</p>
              <p className='text-xl'>or</p>
              <input
                type='file'
                multiple
                hidden
                onChange={handleFileChange}
                ref={fileRef}
              />
              <button
                onClick={handleUploadButtonClick}
                className='bg-gray-300 p-2 rounded-lg'
              >
                Upload Files
              </button>

              {file.length > 0 && (
                <p
                  onMouseEnter={() => setShowFiles(true)}
                  onMouseLeave={() => setShowFiles(false)}
                  className='cursor-pointer text-sm'
                >
                  {file.length} files chosen
                </p>
              )}

              {showFiles && (
                <div className='absolute bottom-0 bg-black text-white p-4'>
                  {file.slice(0, 5).map((f, index) => (
                    <p key={index}>{f.name}</p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dragdrop;
