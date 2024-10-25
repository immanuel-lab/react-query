import React,{useState} from 'react'
import Inputbox from './Inputbox'
import {shuffle} from '../utils/shuffle'


function Oneback() {
    let originalArray=['john','alpha','peterson','loi','fred','alice','larry','kevin','james']

    
    const[input,setInput]=useState("")
    const [shuffled, setShuffled] = useState(originalArray);
    const[isShuffled,setisShuffled]=useState(false)

    const handleChange=(e)=>{
        console.log("handle change rendered")
        setInput(e.target.value)
    }

    const handleShuffle = () => {
        console.log("shuffled")
        setShuffled((prevShuffled) => shuffle([...prevShuffled]));
        setisShuffled(true)
      };

    //   const handleShuffle = () => {
    //     setShuffled((prevShuffled) => {
    //       const newShuffled = shuffle([...prevShuffled]);
    //       console.log(newShuffled);
    //       return newShuffled;
    //     });
    //   };
    return (
    <div className='flex flex-col items-center'>
    
    <div className='flex justify-center mt-5 space-x-2'>
        <button
         onClick={handleShuffle}
         className='bg-blue-500 px-4 py-3 rounded-md text-white hover:bg-blue-400'>shuffle</button>
      <Inputbox input={handleChange} value={input}/>
    </div>

<div>
{/* {input && input !== '' ? (
          isShuffled ? (
            shuffled.filter((arr) => arr.includes(input)).map((item, index) => {
              return <p className='text-xl' key={index}>{item}</p>;
            })
          ) : (
            originalArray.filter((arr) => arr.includes(input)).map((item, index) => {
              return <p className='text-xl' key={index}>{item}</p>;
            })
          )
        ) : isShuffled ? (
          shuffled.map((item, index) => {
            return <p className='text-xl' key={index}>{item}</p>;
          })
        ) : (
          originalArray.map((item, index) => {
            return <p className='text-xl' key={index}>{item}</p>;
          })
        )} */}


{input && input !== '' ? (
          isShuffled ? (
            shuffled.filter((arr) => arr.includes(input)).map((item, index) => {
              return <p className='text-xl' key={index}>{item}</p>;
            })
          ) : (
            originalArray.filter((arr) => arr.includes(input)).map((item, index) => {
              return <p className='text-xl' key={index}>{item}</p>;
            })
          )
        ) : isShuffled ? (
          shuffled.map((item, index) => {
            return <p className='text-xl' key={index}>{item}</p>;
          })
        ) : (
          originalArray.map((item, index) => {
            return <p className='text-xl' key={index}>{item}</p>;
          })
        )}


 </div>



    
    </div>
  )
}

export default Oneback
