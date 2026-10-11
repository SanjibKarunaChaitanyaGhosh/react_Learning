import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav
        className='bg-gray-200 sm:flex-row justify-between px-10 md:flex sticky top-0 z-50 shadow-md '>
        <h3 className='text-2xl py-3 text-center'><strong>Blog-</strong><span className='text-red-500 '>Website</span></h3>
        <ul className='flex sm:flex-row justify-between items-center gap-5 flex-col text-center px-5'>
          <Link to="/">Home</Link>
          <Link to="/login" className='rounded py-2 px-2 text-white bg-blue-900 hover:bg-gray-700 hover:text-white'>Login</Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar