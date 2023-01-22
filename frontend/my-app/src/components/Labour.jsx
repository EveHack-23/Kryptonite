import React from 'react'

function Labour({labour}) {
  return (
    <div>
    <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-3 m-3">
      <img style={{height:"100%"}} src={labour.img} class="card-img" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      
        <h5 class="card-title">Owner's Name:{labour.name}</h5>
        <p class="card-text">Number of Workers available :{labour.worker}</p>
        <p class="card-text">Address of the Industry :{labour.address}</p>
        <ul>
        <p class="card-text">Offdays in a week:</p>
        {
         labour.offdays.map(offd=>(
      <li class="card-text">{offd}</li>
   ))}
        </ul>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <hr/>
        <a href="/chat"><button className='btn btn-primary'>Chat</button></a>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Labour
