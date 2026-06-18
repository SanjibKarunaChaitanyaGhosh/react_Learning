
const Card = (props) => {
    console.log(props.user)
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1780672823738-2a8d15d79aaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMjZ8fHxlbnwwfHx8fHw%3D" alt="image of Sanjib Ghosh" />
        <h1 >Name : {props.user}</h1>
        <p>my age is : {props.age} </p>
        <button>View Profile</button>
    </div>
  )
}

export default Card
