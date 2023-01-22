import {React,useState} from 'react'
import useFetch  from '../../hooks/userFetch'
import "./Tools.css"
import Tools from '../../components/tools'
import Navbar from '../../components/navbar'
import Filter from '../../components/filter'

function Tool() {
  const[tool,settool]=useState("")
  const[click,setclick]=useState(false)
  const{data,loading,error,reFetch}=useFetch("/tools/get");
  return (
  <div>
   <div className='head'>
    <Navbar/>
  </div>
  <div className='head1'>
    <input type="text" className='input' onChange={function(e){settool(e.target.value)}}  placeholder='Search'></input>
    <button type="submit" className='btn btn-primary ml-auto' onClick={()=>{
      reFetch(`/tools/getby?tools=${tool}`)
    }}>Search</button>
    <button className='btn btn-primary' onClick={function(){ setclick(!click)}}>filter</button>
    <div className='filter'>
       {click && <Filter/>}
    </div>
    </div>
    <div className='container'>
   <div className='row'>
   {
    data.map(items=>(
       <div className='col-md-4'>
         <Tools item={items} key={items._id}/>
      </div>
   ))}
  </div>
  </div>
  </div>
  )
}

export default Tool
