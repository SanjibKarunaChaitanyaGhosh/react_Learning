import Card from "./components/card.jsx"

const App = () => {
  return (
    <div className="parent">
      <Card user="Alia" age={20}/>
      <Card user="Aman" age={22}/>
      <Card user="Arman" age={23}/>
      <Card user="Aeyesha" age={19}/>
      <Card user="Aeyesha" age={19}/>
    </div>
  )
}

export default App