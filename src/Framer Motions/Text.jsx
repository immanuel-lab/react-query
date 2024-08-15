// import React from 'react';
// import { motion } from 'framer-motion';

// function Text() {
//   const text = "immanuel rajomhan";
  
//   return (
//     <>
//       <h1 className='text-3xl text-purple-700 justify-center flex'>
//         {text.split('').map((letter, index) => (
//           <motion.p 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1,staggeredChildren:index*0.2 }} 
            
//             // transition={{ delay: index * 0.1 }} // Applying delay based on index
//             key={index}
//           >
//             {letter}
//           </motion.p>
//         ))}
//       </h1>
//     </>
//   );
// }

// export default Text;




import React from 'react';
import { motion } from 'framer-motion';

function Text() {
  const text = "immanuel rajomhan";
  
  // Define variants for the staggered animation
  const parentVariants = {
    animate: {
      transition: {
        staggerChildren: 0.124 
      }
    }
  };

  return (
    <>
      <h1 className='text-3xl text-purple-700 '>
        <motion.div initial="initial"
        className='flex justify-center'
         animate="animate" variants={parentVariants}>
          {text.split('').map((letter, index) => (
            <motion.p 
              key={index}
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 }
              }}
            >
              {letter}
            </motion.p>
          ))}
        </motion.div>
      </h1>
    </>
  );
}

export default Text;
