
import { Bookmark } from 'lucide-react'

export const Cards = (props) => {
  return (
    <>
        <div className="card">
        <div>
          {/* top of the card */}
          <div className="top">
            <div className='imageBox'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSai4hY-R_BVpOdZ5yooQ0GBTNeHSipTfMkKB6TwX8aHw&s=10" alt="" />
              {/* {props.logo} */}
            </div>
            
            <button>Save <Bookmark size={12} /> </button>
          </div>
          {/* body of the card */}
          <div className="center">
            <h3>{props.company} <span>{props.dpost}</span></h3>
            <h2>{props.postName}</h2>
            <div className='tag'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>
        {/* bottom of the card */}
        <div className="bottom">
          <div className='bottomLeft'>
              <h1>{props.pay}</h1>
              <p>{props.loc}</p>
          </div>
          
          <button>Apply Now</button>
        </div>
    </div></>
  )
}

export default Cards
