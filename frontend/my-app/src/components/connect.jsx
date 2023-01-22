import React from 'react'

function Connect({worker}) {
  return (
    <div>
    <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-3 m-3">
      <img style={{width:"300px",height:"200px"}}  src={worker.img} class="" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{worker.name}</h5>
        <p class="card-text">{worker.address}</p>
        <p class="card-text">{worker.desc}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <hr/>
        <button className="btn btn-primary">Chat</button>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Connect