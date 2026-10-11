import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className='flex justify-center items-center flex-col bg-gray-400 p-10 rounded-2xl shadow-2xl shadow-amber-200 gap-2'>
        <h2 className="font-bold">Login</h2>
        <input type="text" placeholder='type your name here'
          className='p-5 rounde outline-none bg-white py-3 font-semibold transition rounded-2xl' />

        <input type="text" placeholder='Email id'
          className='p-5 rounde outline-none bg-white py-3 font-semibold transition rounded-2xl' />
        
        <input type="password" placeholder='password'
          className='p-5 rounde outline-none bg-white py-3 font-semibold transition rounded-2xl' />
        <button className="bg-amber-700 text-white rounded-2xl px-3 py-2">Signup</button>
      </div>
    </div>
  )
}

export default Signup