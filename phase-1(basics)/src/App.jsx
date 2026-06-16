import card from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      {card()}
    </div>
  )
}

export default App