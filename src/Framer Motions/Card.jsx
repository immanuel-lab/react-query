import React,{useState} from 'react'
import  { motion} from 'framer-motion'
import Dots from './Dots'


function Card() {

   const [hover, setHover] = useState(false)
 

  return (
     
      
      <>
      
      <div className='flex space-x-4 justify-center'>
    <motion.h1 
  initial= {{y:-100}}
  animate={{y:50,color:"#fc0328",rotate:360}}
  transition={{delay:0.5,ease:"linear",duration:1}}
className='text-3xl underline text-purple-600'

    >
        
        card anime

        </motion.h1>



<div className='mt-16 flex space-x-2'>
      <Dots delay={1}/>
      <Dots delay={1.5}/>
      <Dots delay={2}/>
      </div>

      </div>
     


    
     


<div className='w-full h-[48rem] bg-gray-200  container mt-20 flex flex-col'>

        <motion.div 
         animate={{ y:50 ,opacity:1}}
         transition={{ delay: 1,ease:"linear",duration:1 }} 
        initial={{y:200,opacity:0}}
        className=' flex flex-col space-y-6 ml-10'>
        <h1 className='text-4xl font-bold' >Experience Our Airport</h1>
        <p className='text-xl font-[400]'>Shop, dine or simply unwind at our lounges, our airport <br/> offers all that your need to make the most of your time.</p>
        </motion.div>

      <div className='grid grid-cols-3 mt-32 z-10 ml-10 '>

        <div  className='relative'>
            <img src='https://cdn.pixabay.com/photo/2024/03/08/09/55/cat-8620369_1280.png' 
             className={`w-[18rem] h-[30rem] object-cover  ${hover? 'cursor-pointer brightness-50' : ''}`}
            alt="image-1"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            />

         
          
<div
            className={`absolute bottom-0 left-[40%]  transform  -translate-x-1/2 text-white duration-500 ${
              hover ? 'bottom-1/2 pointer-events-none' : 'pointer-events-auto'
            }`}
          >
                <h1 className="text-3xl text-white">pranan meet and greet</h1>
                <p className={`text-base ${hover ? 'block' : 'hidden'}`}> “From finger food  to fine dining, Mangaluru airport offers mouthwatering culinary experience to savor your taste buds.”</p>
            </div>






         
        </div>
            
        <div >
            <img src='https://cdn.pixabay.com/photo/2023/08/20/08/30/luis-i-bridge-8201941_1280.jpg'
            className='w-[20rem] h-96 object-cover'
            alt="image-1"/>
        </div>
        <div >
            <img src='https://cdn.pixabay.com/photo/2023/08/20/08/30/luis-i-bridge-8201941_1280.jpg'
            className='w-[20rem] h-96 object-cover'
            alt="image-1"/>
        </div>
      </div>
</div>
    
    </>


  )
}

export default Card



