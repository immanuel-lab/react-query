import React from 'react'
import { Reorder,useDragControls } from "framer-motion"
import { useState } from "react"
import { TbGridDots } from "react-icons/tb";

function Reorderlist() {
    

    const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

    const[items,setItems]=useState(initialItems)

    const controls = useDragControls()
  return (
    <>
      {/* <Reorder.Group axis="y" values={initialItems} onReorder={setItems}>
      {items.map((item,index) => (
          <Reorder.Item key={item} value={item}>
            <div className='flex justify-center items-center mt-10 '>
                <div className='px-10 py-3 bg-gray-300'>
                {item}
                </div>
    </div>
        </Reorder.Item>
      ))}
    </Reorder.Group> */}



    <Reorder.Group axis="y" values={initialItems} onReorder={setItems}>
      {items.map((item,index) => (
          <Reorder.Item key={item} value={item}  dragListener={false}
          dragControls={controls}>
            <div className='flex justify-center items-center mt-10 '>
                <div className='px-16 py-3 bg-gray-300'>
              <div className='flex space-x-12' >  
              <div>{item} </div>
              <div className='mt-2'  dragControls={controls}  ><TbGridDots /></div>
              </div>
                </div>
    </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>







    </>
  )
}

export default Reorderlist
