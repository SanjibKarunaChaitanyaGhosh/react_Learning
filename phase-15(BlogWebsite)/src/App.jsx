import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const user = true

  return (
    <Routes>
      {user && (
        <>
          <Route path="/" element={<Home />} />
        </>
      )}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      

    </Routes>
  )
}

export default App