import React from 'react'
import { Bookmark } from 'lucide-react'

export const Cards = () => {
  return (
    <>
        <div className="card">
        <div>
          {/* top of the card */}
          <div className="top">
            <div className='imageBox'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSai4hY-R_BVpOdZ5yooQ0GBTNeHSipTfMkKB6TwX8aHw&s=10" alt="" />
            </div>
            
            <button>Save <Bookmark size={12} /> </button>
          </div>
          {/* body of the card */}
          <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className='tag'>
              <h4>Part-time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
        </div>
        {/* bottom of the card */}
        <div className="bottom">
          <div className='bottomLeft'>
              <h1>$120/hr</h1>
              <p>Mumbai, India</p>
          </div>
          
          <button>Apply Now</button>
        </div>
    </div></>
  )
}

export default Cards
