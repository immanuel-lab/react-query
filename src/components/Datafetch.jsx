import React, { useState,useTransition } from 'react'
import { AiOutlineSearch } from "react-icons/ai";

function Datafetch() {



const [isPending, startTransition] = useTransition();

const[name,setName]=useState("")
const[error,setError]=useState(false)
const[pokemonData,setPokemonData]=useState(null);

const url= `https://pokeapi.co/api/v2/pokemon/${name}`

const handleChange=(e)=>{
    const input=e.target.value.toLowerCase();
    setName(input);


    if(input===""){
        setPokemonData(null)
        setError(false)
    }
   
}

const handleSubmit=(e)=>{
    e.preventDefault(); 
    try {
        startTransition(async() => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setPokemonData(data)
    })
    } catch (error) {
        setError(true);
    }

}

   





  return (
    <>
    <div className='flex flex-col items-center space-y-2 mt-5'>
        <div className='flex px-3 py-1 border border-2 border-purple-500 rounded-2xl'>
        <AiOutlineSearch size={20} className='mt-3 text-purple-600'/>
      <input 
        type='text' 
        placeholder='Search pokemon...' // Here, provide a string for the placeholder
        className='focus:outline-none py-2 px-12 rounded-md text-gray-600 placeholder-green-600  text-lg '
        onChange={handleChange}
     />
     </div>
     <button type='submit' 
     onClick={handleSubmit}
     className='bg-purple-500 px-6 py-2 text-white rounded-xl'>
        pokemon
        </button>

        {pokemonData!==null?
            <div>
    <img src={pokemonData.sprites.front_default} alt="pokemon image" className='size-32'/>
        <p>pokemon:{pokemonData.name}</p>
    <p>weight:{pokemonData.weight}</p>
    <p>height:{pokemonData.height}</p>
    <p>order:{pokemonData.order}</p>
    <p>type:{pokemonData.types[0].type.name}</p>
            </div>:null
        }
{error && <p>pokemon not found.....</p>}

{isPending && <p>loading......</p>}
    </div>
    </>
  )
}

export default Datafetch




