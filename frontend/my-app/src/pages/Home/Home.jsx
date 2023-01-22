import React from 'react'
import "./Home.css"
import Navbar from '../../components/navbar'
import News from '../../components/news'

function Home() {
  return (
    <div>
      <div className='head'>
      <Navbar/>
      </div>
      <div className='container news'>
        <h1>Latest News</h1>
        <p>New technology is entering vastly into agricultural field</p>
        <hr style={{"marginBottom":"50px"}}></hr>
        <News/>
      </div> 
      <footer className='foot'>
      <div class="foot1">
        <i class="fa-brands fa-instagram icon"></i>
        <i class="fa-brands fa-facebook-f icon"></i>
        <i class="fa-brands fa-twitter icon"></i>
        <i class="fa-solid fa-envelope icon "></i>
      </div>
      <div class="foot2">
         <p><i class="fa-solid fa-copyright"></i>  Copyright 2022 E-farm</p>
      </div>
    </footer>
    </div>
  )
}

export default Home
