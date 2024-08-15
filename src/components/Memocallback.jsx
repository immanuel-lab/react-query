import React ,{useState}from 'react'

function Memocallback() {

    const [theme, setTheme] = useState(false)

    const toggleTheme=()=>{
        setTheme(!theme)
    }

  return (
    <div className={`${theme && "dark"}`}>
    <div
     className='flex flex-col justify-start  items-center space-x-24 w-3/4  h-screen border border-2 border-blue-800 dark:bg-black'>
       
       <div className='flex space-x-11'>
        <p className='text-2xl dark:text-white underline'>usecontext</p>
        <button 
        onClick={toggleTheme}
        className='bg-green-500 px-3 py-2 text-white dark:bg-purple-500'
        >theme</button>
        </div>
        
        <div className='text-lg dark:text-white/75'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla labore adipisci facilis culpa architecto accusamus est rerum deleniti esse! Hic voluptas voluptate perspiciatis incidunt vero? Accusamus sunt corrupti facere commodi!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla labore adipisci facilis culpa architecto accusamus est rerum deleniti esse! Hic voluptas voluptate perspiciatis incidunt vero? Accusamus sunt corrupti facere commodi!
        </div>

        </div>
       
    </div>
  )
}

export default Memocallback



