import React, { useState } from 'react'

const StateLevel_1 = () => {


    // Name change
    const [name, setName] = useState("Sanjib")

    // password show and hide
    const [show, setShow] = useState(false)

    // paragraph show and hide
    const [para, setPara] = useState(false)

    // background color show and hide
    const [bg, setBg] = useState("white")

    // Input value
    const [inputColor, setInputColor] = useState("")

    const showHide = () => {
        setShow(!show)
        setPara(!para)
    }

    const changeColor = () => {
        setBg(inputColor)
    }

    const changeName = () => {
        setName("Rahul")
    }


    return (
        <div
            className={`flex justify-center items-center w-full text-2xl h-screen flex-col gap-10 ]`
            }
            
            style={{backgroundColor:bg}}
        >
            <h3 onClick={changeName}>{ name} </h3>

            {para && <p > Hello this is to learn show and hidne paragraph leaning useState </p>}

            
            <button
                
                onClick={showHide}
            >
                {show ? "text" : "password"}
            </button>

            <input
                type={show ? "password" : "text"}
                placeholder='Enter your color'
                className='w-30 h-10 border-2 border-black'
                onChange={(e) => setInputColor(e.target.value)}
                value={inputColor} />

            <button
                onClick={changeColor}
                className='bg-amber-300 py-2 px-3 rounded'
            >
                Change the color
            </button>

            <h3>Background color is {bg}</h3>

        </div>
    )
}

export default StateLevel_1