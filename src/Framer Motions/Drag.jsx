import React from 'react'
import {motion} from "framer-motion"

function Drag() {
  return (
    <>
    <div className='flex justify-center items-center h-screen bg-gray-300'>
    <motion.div 
    drag 
    dragMomentum={false}
    // dragElastic={0}
    // dragSnapToOrigin="true"
    dragConstraints={{right:520,left:-570,top:-160,bottom:200}}
     className='size-32 bg-purple-700'>

    </motion.div>

    </div>
      
    </>
  )
}

export default Drag






