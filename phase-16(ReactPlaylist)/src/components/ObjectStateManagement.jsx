import React, { useState } from 'react'

const ObjectStateManagement = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    });

    const formSubmit = (e) => {
        e.preventDefault();

        console.log("Registration Data:", formData);

        alert("Registration successful!");
    };

    const handleChange = (e) => {

        console.log(e)
        console.log(e.target)
        console.log(e.target.value)

        const { name, value } = e.target;

        console.log(name)
        
        setFormData({
            ...formData,
            [name]: value
        });

    };


    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            password: "",
            mobile: ""
        });
    };
    
    return (
        <div>
            <form
                onSubmit={formSubmit}
                className='grid grid-cols-2 gap-5'
            >

                <input
                    className='border-2 border-black py-2 px-3'
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    className='border-2 border-black py-2 px-3'
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    className='border-2 border-black py-2 px-3'
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile no"
                    value={formData.mobile}
                    onChange={handleChange}
                />

                <input
                    className='border-2 border-black py-2 px-3'
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <div className='flex justify-center items-center gap-5 p-3 '>
                    <button
                        className='rounded bg-amber-300 text-2xl py-3 px-5'
                        type="submit"
                    >
                        submit
                    </button>

                    <button
                        className='rounded bg-amber-300 text-2xl py-3 px-5'
                        type="button"
                        onClick={resetForm}
                    >
                        Reset
                    </button>
                </div>
            </form>
            
            <div>
                <h2>Output</h2>

                <p>Name: {formData.name}</p>

                <p>Email: {formData.email}</p>

                <p>Mobile: {formData.mobile}</p>
            </div>
        </div>
    )
}

export default ObjectStateManagement