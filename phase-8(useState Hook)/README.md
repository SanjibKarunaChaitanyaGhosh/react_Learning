# we have to import useState from react for using useState
import React, { useState } from 'react'


const [num, setNum] = useState(0)

within function we have to use num+1 instead of num++

# setNum(num+1)

<h1 >{num}</h1>