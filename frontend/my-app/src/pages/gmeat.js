import React from 'react'

function Gmeat() {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link " href="#">MARKET<span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="collection/getmeat">MEAT</a>
      <a class="nav-item nav-link" href="#">CATTLE</a>
      <div className='ml-auto' >
    <input type="text" style={{width:"30rem",marginLeft:"20rem"}} className='input'   placeholder='Search'></input>
    <button type="submit" className='btn btn-primary ml-auto' >Search</button>
  </div>
    </div>
  </div>
</nav>
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src="https://images.indianexpress.com/2019/10/meat-1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Rahul</h5>
            <p className="card-text">Ready for open works.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Ramesh</h5>
            <p className="card-text">slightly negotiable.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Raju</h5>
            <p className="card-text">Available at any time.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gmeat
