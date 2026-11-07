import React, { useState } from 'react'

const Registration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nummber, setNumber] = useState("")

    const formSubmit = (e) => {
        e.preventDefault()

        alert("Registration submitted successfully!")

    }

    return (
        <div className='flex justify-center items-center flex-col '>
            <div>
                <div className='bg-blue-500 h-2 w-full'></div>
                <form
                    action=""
                    onSubmit={formSubmit}
                >
                    <div className='flex flex-col p-10 bg-amber-200 border border-amber-50 shadow-2xl'>
                        <h3 className='text-3xl'>Brand</h3>
                        <p>pleasae enter your details to join us!</p>
                        <div className='flex justify-center items-center p-5 flex-col'>
                            <div className='grid grid-cols-2 p-3 gap-3'>

                                <label>Your full name</label>
                                <label>Enter your mobile no.</label>

                                {/* inputs */}
                                <input
                                    type="text"
                                    placeholder='enter your name'
                                    className='px-3 py-3'
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                                <input
                                    type="number"
                                    placeholder='mobile number'
                                    className='px-3 py-3'
                                    onChange={(e) => setNumber(e.target.value)}
                                    value={nummber}
                                />

                            </div>
                            <div className='grid grid-cols-2 p-3 gap-3'>

                                <label>Your gmail</label>
                                <label>Enter your Password</label>

                                {/* inputs */}
                                <input
                                    type="text"
                                    placeholder='example@gmail.com'
                                    className='px-3 py-3'
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <input
                                    type="password"
                                    placeholder='password'
                                    className='px-3 py-3'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                        </div>
                        <button
                            className='bg-blue-950 text-white py-3 rounded '
                            type="submit"
                        >
                            Signup
                        </button>
                        <p className='text-center'> Already have an account ? Signin </p>
                    </div>
                </form>
                <div className='flex bg-amber-400 text-2xl w-full flex-col p-5 gap-3'>
                    <h3 className='text-center'>OutOut</h3>
                    <h1>name : { name }</h1>
                    <h1>mobile no. : { nummber }</h1>
                    <h1>gmail : { email}</h1>
                    <h1>Password : { password}</h1>
                </div>
            </div>
        </div>
    )
}

export default Registration