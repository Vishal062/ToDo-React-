import { useState } from "react";
function ToDo() {
  const [text, setText] = useState("");
  //Now we need a list to get todos
  const [todos, setToDos] = useState([]);
  const handleChange = (e) => {
    console.log("Input box changed");
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    setToDos([...todos, text]); //spread operator
    setText(""); //This thing make clear
    //console.log(text);
  };
  return (
    <div>
      <input
        id="inp"
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Enter your Todo"
      />
      <button id="btn" onClick={handleAddTodo}>
        Add
      </button>
      {todos.map((e) => (
        <div id="divStyle">
          {e}
          <button id="btn1">YES</button>
          <button id="btn2">NO</button>
        </div>
      ))}
    </div>
  );
}

export { ToDo };
