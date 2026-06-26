import React from 'react'
import Navbar from './components/Section1/Navbar.jsx'
import Page1Content from './components/Section1/Page1Content.jsx'

const App = () => {

  const users=[
    {img:'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGl0JTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    intro:'',
    color:'blue',
    tag:'Satisfied'
    },
    {img:'https://images.unsplash.com/photo-1763128516808-785e80c1dd68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGl0JTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    intro:'',
    color:'pink',
    tag:'Underserved'
    },
    {img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjBwcm9mZXNzaW9uYWwlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'green',
    tag:'Underbank'
    },
    {img:'https://plus.unsplash.com/premium_photo-1661593195372-874ca9d29713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXQlMjBwcm9mZXNzaW9uYWwlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'sky',
    tag:'Underpass'
    },
    {img:'https://images.unsplash.com/photo-1666867936058-de34bfd5b320?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXQlMjBwcm9mZXNzaW9uYWwlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    color:'gray',
    tag:'Hellohi'
    }
  ]

  
  return (
    <div >
      <Navbar/>
      <Page1Content users={users} />
    </div>
  )
}

export default App