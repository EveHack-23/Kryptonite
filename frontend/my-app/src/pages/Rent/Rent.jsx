import {React,useState} from 'react';
import useFetch  from '../../hooks/userFetch'
import "./Rent.css"
import Navbar from '../../components/navbar'
import Rent from '../../components/rent'

function Rents() {
  const[places,setplaces]=useState(" ");
  const{data,loading,error,reFetch}=useFetch("/rent/get");
  return (
   <div>
    <div className='head'>
    <Navbar/>
    </div>
    <div className='head1'>
    <input type="text" className='input' onChange={(e)=>{setplaces(e.target.value)}}  placeholder='Search'></input>
    <button type="submit" className='btn btn-primary ml-auto' onClick={()=>{
      reFetch(`/rent/getby?places=${places}`)
    }}>Search</button>
  </div>
  <div className='container'>
   <div className='row'>
   {
    data.map(place=>(
       <div className='col-md-4'>
         <Rent place={place} key={place._id}/>
      </div>
   ))}
   </div>
   </div>
  </div> 
  )
}

export default Rents
