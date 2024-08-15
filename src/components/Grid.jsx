import React from 'react'

// https://play.tailwindcss.com/ml4wHn1KzW
function Grid() {
  return (
    <>
      {/* <div className='grid justify-items-center items-center h-screen'>
        hello world
      </div> */}


<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 content-center h-screen'>
        <div className='h-48  bg-gray-400 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam exercitationem velit nesciunt, omnis obcaecati, aut, aspernatur voluptates quod sapiente magni reprehenderit deserunt. Similique iusto temporibus fugit vitae, ducimus ipsa.</div>
        <div className='h-48 bg-gray-400 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam ut aliquid consequuntur et vel numquam praesentium soluta illo, quis sunt dolorum eius perspiciatis error non sapiente repudiandae facere. Libero.</div>
        <div className='h-48 bg-gray-400 p-4 overflow-hidden' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, numquam consequuntur, facere accusantium quasi ad magnam accusamus nobis in adipisci unde impedit doloribus neque temporibus recusandae eum, ullam laudantium? Quis.</div>
        <div className='h-48 bg-gray-400 p-4 overflow-hidden' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, numquam consequuntur, facere accusantium quasi ad magnam accusamus nobis in adipisci unde impedit doloribus neque temporibus recusandae eum, ullam laudantium? Quis.</div>
        <div className='h-48 bg-gray-400  p-4 overflow-hidden'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, numquam consequuntur, facere accusantium quasi ad magnam accusamus nobis in adipisci unde impedit doloribus neque temporibus recusandae eum, ullam laudantium? Quis.</div>
        <div className='h-48 bg-gray-400 p-4 overflow-hidden' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, numquam consequuntur, facere accusantium quasi ad magnam accusamus nobis in adipisci unde impedit doloribus neque temporibus recusandae eum, ullam laudantium? Quis.</div>
        
      </div>
    </>
  )
}

export default Grid
