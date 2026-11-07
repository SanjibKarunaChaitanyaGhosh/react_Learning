import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' p-5 border-5 rounded'>
      <ul className=' linkbtn-2xl text-amber-50 border-2 border-white grid grid-cols-3 gap-5'>

        <Link to="/" className='linkbtn'>Home</Link>

        <Link to="/about" className='linkbtn'>About</Link>
        
        <Link to="/passeventasprops" className='linkbtn'>PassEventAsProps</Link>
        
        <Link to="/eventpropagation" className='linkbtn'>EventPropagation</Link>

        <Link to="/state" className='linkbtn'>State</Link>

        <Link to="/statelevel1" className='linkbtn'>State_level_1</Link>

        <Link to="/registration" className='linkbtn'>Registration Form</Link>

        <Link to="/objectstatemanagement" className='linkbtn'>Object State Management</Link>

        <Link to="/studentmanagement_system" className='linkbtn'>Student management System</Link>

        <Link to="editstudentinfo" className='linkbtn' >Edit Student Info</Link>

      </ul>
    </nav>
  )
}

export default Navbar