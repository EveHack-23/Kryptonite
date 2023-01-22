import {React,useState} from 'react';
import "./Labour.css"
import useFetch  from '../../hooks/userFetch'

import Navbar from '../../components/navbar'
import Labour from '../../components/Labour'

function Labours() {
  const[places,setplaces]=useState(" ");
  const{data,loading,error,reFetch}=useFetch("/labour/get");
  return (
    <div>
     <div className='head'>
    <Navbar/>
  </div>
  <div className='head1'>
    <input type="text" className='input' onChange={function(e){setplaces(e.target.value)}}  placeholder='Search'></input>
    <button type="submit" className='btn btn-primary ml-auto' onClick={()=>{
      reFetch(`/labour/getby?places=${places}`)
    }}>Search</button>
    </div>
    <body>
    <div className='container'>
    {
    data.map(labours=>(
       <div >
         <Labour labour={labours} key={labours._id}/>
      </div>
   ))}
  
    </div>
    </body>
    </div>
  )
}

export default Labours
