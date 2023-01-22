import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div >
      <nav  class="navbar navbar-expand-lg navbar-dark  p-3">
  <Link to="/">
  <a class="navbar-brand ml-3" href="/" style={{fontFamily:"'Amaranth', sans-serif",fontSize:"50px"}}>
  E-fARM
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  </Link>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">ABOUT<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/labour">LABOUR<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/connect">CONNECT<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/weather">WEATHER<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ITEMS
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/tools">Tools</a>
          <a class="dropdown-item" href="/Rent">Land</a>
          
        </div>
      </li>
    </ul>
    <div className="">
      <a href='/additems'><button className="btn btn-primary mr-5 ml-3">Register</button></a>
    </div>
  </div>
  
</nav>
    </div>
  )
}

export default Navbar
