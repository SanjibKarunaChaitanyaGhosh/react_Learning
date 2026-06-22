import {Bookmark} from 'lucide-react'
import Cards from './components/Card.jsx'
import User from './components/User.jsx'

const App=()=>{
  return (
    <div className="parent">
      <Cards />
      <User name='Sanjib'/>
      <User name='Sanjib'/>
      <User name='Sanjib'/>
      <User name='Sanjib'/>
      <User name='Sanjib'/>
      
    </div>
  )
}

export default App