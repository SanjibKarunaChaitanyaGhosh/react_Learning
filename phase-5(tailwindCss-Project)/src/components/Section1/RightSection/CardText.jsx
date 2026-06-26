import CardButton from "./CardButton"

const CardText = (props) => {
  return (
    <div>
        <p className='leading-normal mb-10 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae rerum mollitia labore dolorem error libero.</p>
        <CardButton tag={props.tag} color={props.color}/>
    </div>
  )
}

export default CardText