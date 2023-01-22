import React from 'react'

function Rent({place}) {
  return (
      <div class="card-deck mb-5">
  <div class="card">
    <img class="card-img-top" src={place.img} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Address:{place.address}</h5>
      <p class="card-text">Minimum Pice:{place.minprice}</p>
      <p class="card-text">Area:{place.area}cent</p>
      <p class="card-text">Contact Number:{place.contact}</p>
      <p class="card-text">Details:{place.description}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <a href="/chat"><button className='btn btn-primary'>Chat</button></a>
    </div>
  </div>
  
</div>
  )
}

export default Rent