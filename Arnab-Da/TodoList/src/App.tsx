import { useState, type Dispatch, type SetStateAction } from "react";

const App = () => {
  const [text, setText] = useState("");

  const [arr, setArr] = useState<string[]>([]);

    const addTodo = () => {
    let newArr = [...arr, text];

    setArr(newArr);

    console.log(arr.length);
  };


  return (
    <>
      <nav className="w-full bg-sky-200 flex justify-center p-10 text-4xl">
        Todo-<span className="text-red-400">List</span>
      </nav>
      <InputBox setText={setText} addTodo={addTodo}/>
      <AddTodoComonents arr={arr}/>
     
    </>
  );
};



const InputBox = ({setText,addTodo}:{
  setText:Dispatch<SetStateAction<string>>,
  addTodo:Dispatch<SetStateAction<string>>
}) => {
  return (
    <section className="w-full flex justify-center gap-4">
      <input
        className="bg-amber-200 text-2xl border-none"
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <button className="rounded bg-green-500 p-5" onClick={() => addTodo()}>
        Save
      </button>
    </section>
  );
};

type todoComponentsType = {
    arr:string[]
}
const AddTodoComonents = ({arr}:todoComponentsType)=>{
  return (
     <section className="w-full flex justify-center flex-col gap-5">
        {arr.map((e) => {
          return <div className="bg-sky-300 py-5 px-10"> {e} </div>;
        })}
      </section>
  )
}

export default App;
