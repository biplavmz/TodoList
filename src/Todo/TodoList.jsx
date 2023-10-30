import react, { useEffect, useState } from "react";
import "./Todo.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodo = todos.filter((item, i) => i !== index);
    setTodos(newTodo);
  };

  return (
    <>
      <input
        value={input}
        type="text"
        placeholder="Take a note"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>remove Todo</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
