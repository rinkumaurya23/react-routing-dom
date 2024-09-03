import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Filter() {
    const [searchParams,setSearchParams]=useSearchParams();
    // console.warn(searchParams.get("age"))
    // console.warn(searchParams.get("city"))
    const age= searchParams.get('age')
    const city= searchParams.get('city')


  return (
    <div>
      <h1>Filter Component</h1> 
      <h3>my age is :- {age}</h3>
      <h4>my city is :- {city}</h4>
     <input type="text" onChange={(e)=>setSearchParams({text:e.target.value})} placeholder='Set Text in Query Params' />
     <br/>
     <br/>
     <input type="text" onChange={(e)=>setSearchParams({Age:e.target.value})} placeholder='Set Age in Query Params' />

      {/* <button onClick={()=>setSearchParams({age:40})}>set Query Params</button> */}


    </div>
  )
}

export default Filter

