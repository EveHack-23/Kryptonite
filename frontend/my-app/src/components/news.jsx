import React from 'react'

function News() {
  return (
    <div>
       <div className="card-deck">
        <div className="card" >
          <img className="card-img-top" src="https://images.news18.com/ibnlive/uploads/2022/05/bee-day-165296536416x9.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Bee Vectoring Technologies</h5>
            <p className="card-text">When it comes to U.S. crop production, honey bees are worth $20 billion. These insects are essential to human survival, so there is increasing innovation in agriculture equipment to help protect bees and maximize their pollination capabilities</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://nammafamilybuilder.com/wp-content/uploads/2022/02/Farm-land-for-sale.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Real-Time Kinematic (RTK) Technology</h5>
            <p className="card-text">Robert Salmon, a UK-based arable farmer, found that constraining farming machinery to a permanent lane significantly reduced damage to the soil.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://images.indianexpress.com/2022/08/cows-1-1-1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Livestock Farming Technology</h5>
            <p className="card-text">Emerging livestock technologies provide farmers with data-driven insights, allowing them to streamline farm management, improve animal care, and boost productivity.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
