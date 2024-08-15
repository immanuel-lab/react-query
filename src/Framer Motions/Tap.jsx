import React from 'react'
import  { motion} from 'framer-motion'

function Tap() {
  return (
    <>
<motion.h1
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.8,
    delay:1,
    ease:"linear"
}}
className='text-3xl text-purple-700 text-center'
    
>
    tap animations</motion.h1>
    </>
  )
}

export default Tap
