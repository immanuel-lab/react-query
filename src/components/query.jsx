import React from 'react'
import {useQuery} from "@tanstack/react-query"
import {GridLoader} from 'react-spinners'

function Query() {
    
    const getPosts=  async() => {
        const response = await fetch('http://localhost:5000/posts');
        return response.json();
      }
    
    
    const { data, isLoading, error,isError} = useQuery({
        queryKey:['posts'],
        queryFn: getPosts,
        staleTime:600000
    });

      console.log(data);
  return (
    <>
     
     { isError && <p className='text-center text-4xl text-red-600'>{error.message}</p>}

     {isLoading && <div className='flex justify-center items-center min-h-screen'>{<GridLoader size={10} color='#36d7b7'/>}</div>}

     <ul className='mt-4'>
      {data?.map((post) => (
        <li key={post.id} className='text-center text-green-700'>{post.title} written by {post.author}</li>
      ))}
    </ul>
      
    </>
  )
}

export default Query
