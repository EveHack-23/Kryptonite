import React from 'react'

function Tools({item}) {
  return (
      <div class="card-deck mb-5">
  <div class="card">
    <img class="card-img-top" src={item.img} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{item.tool}</h5>
      <p class="card-text">Contact number:+91 {item.number}</p>
      <p class="card-text">Address:{item.address}</p>
      <p class="card-text">Rent/sell:{item.for}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button className='btn btn-primary'>chat</button>
    </div>
  </div>
  
</div>
  )
}

export default Tools
