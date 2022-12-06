import React from "react";

function TodoApp() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Todo:
          <input type="text" value={input} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;