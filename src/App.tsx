import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import { Todo } from "./types";
import "./App.scss";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setAllTodos([...allTodos, {id: Date.now(), todo, isDone: false}]);
      setTodo("")
    } else {
      console.log("No hay todo")
    }
  };

  return (
    <div className="header">
      <h1 className="header__title">Taskify</h1>
      <InputField todo={todo} setTodo= {setTodo} handleAdd={handleAdd} />
      {allTodos && allTodos.map(todo => (
        <li>{todo.todo}</li>
      ))}
    </div>
  );
}

export default App;
