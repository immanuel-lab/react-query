import React from 'react'
import  { motion} from 'framer-motion'

function Dots({delay}) {
  return (
    <>
      <motion.div
      className="size-3 rounded-full bg-green-500 "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease:"linear"
      }}/>
    </>
  )
}

export default Dots
