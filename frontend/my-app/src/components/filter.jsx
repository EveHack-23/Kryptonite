import React, { useState } from 'react';
import useFetch  from '../hooks/userFetch'

function Filter() {
    const{max,setMax}=useState("0")
    const{data,loading,error,reFetch}=useFetch("/tools/get");
  return (
    <div style={{backgroundColor:"#f0fff0"}}>
       <div style={{textAlign:"left",padding:"3px"}}>
         <label>Max: </label>
         <input type="text" className='form-control' onChange={(e)=>{ setMax(e.target.value)}} on placeholder="price"></input>
         <label>Purpose: </label>
         <input type="text" className='form-control' placeholder="purpose"></input>
         <button className='btn btn-primary' onClick={function(){ reFetch(`/tools/getby?price=${max}`)}}>search</button>
       </div>
    </div>
  )
}

export default Filter
