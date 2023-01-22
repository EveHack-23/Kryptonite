import React from 'react';
import Connects from "../../components/connect"
import Navbar from '../../components/navbar';
import useFetch  from '../../hooks/userFetch';

function Connect() {
    const{data,loading,error,reFetch}=useFetch("/connection/get");
  return (
    <div>
      <div className='head'>
    <Navbar/>
    </div>
    <div style={{marginBottom:"3rem"}}>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link " href="#">MARKET<span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="collection/getmeat" onClick={()=>{reFetch("/collection/getmeat")}}>MEAT</a>
      <a class="nav-item nav-link" href="#">CATTLE</a>
      <div className='ml-auto' >
    <input type="text" style={{width:"30rem",marginLeft:"20rem"}} className='input'   placeholder='Search'></input>
    <button type="submit" className='btn btn-primary ml-auto' >Search</button>
  </div>
    </div>
  </div>
</nav>
    </div>
    <div className='container'>
   <div className='row'>
   {
    data.map(worker=>(
       <div className='col-md-4'>
         <Connects worker={worker} key={worker._id}/>
      </div>
   ))}
   </div>
   </div>
    </div>
  )
}

export default Connect
