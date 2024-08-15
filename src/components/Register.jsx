import React,{useState,useEffect,useRef} from 'react'
import {useForm} from 'react-hook-form'


function Register() {

  const[name,setName]=useState('')


  
const inputRef=useRef()

useEffect(() => {
inputRef.current.focus()
},
[])

const{register,handleSubmit, formState: { errors } }=useForm()

const onSubmit = (data) => console.log(data)


  return (
<form onSubmit={handleSubmit(onSubmit)}>
    <div className='w-full h-screen bg-gray-600'>

    <div className='flex   justify-center'>
        <div className=' w-1/2 lg:w-1/3 min-h-96 mt-10 border border-2 border-blue-600  bg-gray-400 '>
          <div className='flex flex-col space-y-4 items-center gap-y-6'>
      <p className='mt-5 animate-growAndShrink text-blue-800 uppercase text-3xl'>Register</p>



    < input type="text"
    {...register("name", { required: true })}
    autoComplete='off'
  
     ref={inputRef}
     placeholder='name'
    //  onChange={handleNameChange}
     className=' w-3/4 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
/>
{errors.name && <p className='text-red-700 '>name is required</p>}
      
      <input type='email'
         {...register("email",{ required: "email  is required" })}
        autoComplete='off'
       placeholder='email'
       className='w-3/4  py-2 px-4  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
/>
      {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
      
      <input 
        {...register("password")}
      type='password'
       placeholder='password' 
       className=' w-3/4 px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
/>

<input 
       {...register("confirm password")}
      type='password'

       placeholder='confirm password' 
       className=' w-3/4 px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
/>


    <button 
  
    type='submit'
     className='bg-blue-600 uppercase  text-white  px-3 py-1.5 rounded-lg'>
      submit
      </button>


    </div>
    </div>
     </div>
     </div>
     </form>

  )
}

export default Register






