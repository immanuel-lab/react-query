import React, { useEffect,useState } from 'react'

function Abort() {
    const pokemon=['pikachu',"charmander","ditto","hitmonchan","ninetales"]

    const[pokeState,setPokeState]=useState(0)
    const[pokemonData,setPokemonData]=useState(null);


useEffect(() => {
    let controller

    const fetchData = async () => {
        controller = new AbortController();
        const signal = controller.signal;
        await new Promise(resolve => setTimeout(resolve, 500));
        const url= `https://pokeapi.co/api/v2/pokemon/${pokemon[pokeState]}`
        try {

            const res = await fetch(url,{signal});
            const data = await res.json();
            setPokemonData(data);
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                console.error('Fetch error:', error);
            }
        }
    };

    fetchData();

    return () => {
        if (controller) {
            controller.abort();
        }
    };
}, [pokeState,pokemon]);


const handlePreviousClick=()=>{
        setPokeState(prev=>prev-1)
        if(pokeState===0){
            setPokeState(pokemon.length-1)
    }
        
}


const handleNextClick=()=>{
    setPokeState(prev=>prev+1)
    if(pokeState===pokemon.length-1){
        setPokeState(0)
}
}

  return (
    <>
    <div className='flex flex-col items-center'>

    <div  className='flex space-x-6 justify-center  items-center mt-5'>
    <button onClick={handlePreviousClick} className='bg-purple-500 p-3 text-white rounded-md'>previous</button>
    <button onClick={handleNextClick} className='bg-purple-500 px-5 py-2 text-white rounded-md'>next</button>
    </div>

        


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
    
    
    
    </div>
        


    </>
  )
}

export default Abort