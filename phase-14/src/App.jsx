import { Routes, Route, Form } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Course from './components/Course';
import Login from './components/Login';
import Signup from './components/Signup';
import Hooks from './components/Hooks';
import UseState from './components/Hooks/UseState';
import JsonPlaceHolder from './components/Hooks/JsonPlaceHolder';
import UseEffect from './components/Hooks/UseEffect';
import PassingStateAsProps from './components/Hooks/PassingStateAsProps';
import LiftingStateUp from './components/Hooks/LiftingStateUp';
import PropsDrilling from './components/Hooks/PropsDrilling';
import USERef from './components/Hooks/USERef';
import EventHandling from "./components/Hooks/EventHandling";
import Forms from "./components/Hooks/Forms";

const App = () => {
  const num=100
  return (
    <>
    <Routes>
      <Route path="/" element={<Home name="Sanjib" age={33} number={num}/>} />
      <Route path="/about" element={<About />} />
      <Route path="/course" element={<Course />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/hooks" element={<Hooks />} ></Route>
      <Route path="/usestate" element={<UseState />}></Route>
      <Route path="/jsonplaceholder" element={<JsonPlaceHolder />}></Route>
      <Route path="/useeffects" element={<UseEffect />}></Route>
      <Route path="/passingstatesasprops" element={<PassingStateAsProps />}></Route>
      <Route path="/lifitingstateup" element={<LiftingStateUp />}></Route>
      <Route path="/propsdrilling" element={<PropsDrilling />}></Route>
      <Route path="useref" element={<USERef />}></Route>
      <Route path="eventhandling" element={<EventHandling />}></Route>
      <Route path="/form" element={<Forms />}></Route>
    </Routes>
    </>
  )
}

export default App