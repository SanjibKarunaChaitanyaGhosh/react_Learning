
const Image = (props) => {
  return (
        <>
        <img className='w-full h-full object-cover' 
            src={props.img} alt="" />
        </>
  )
}

export default Image