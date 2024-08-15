import React from 'react'
import {motion} from 'framer-motion'

function FramerAnime() {
  return (
  <>
  <div className='flex flex-col justify-center items-center h-screen bg-purple-600/50'>
    <motion.h1  animate={{ y:-100,opacity:1 }}
  transition={{ delay: 1 }} 
  initial={{y:-350,opacity:0}}
  className='text-2xl text-red-600 underline'>hello</motion.h1>

    <motion.div className='size-32 bg-black'
    initial={{rotate:"0deg"}}
    animate={{
      rotate:"90deg"
    }}
    >

    </motion.div>

  </div>


  
  </>

  )
}

export default FramerAnime;