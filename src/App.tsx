import { useState } from "react";
import InputField from "./components/InputField/InputField";
import { Todo } from "./types";
import "./App.scss";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [allTodos, setAllTodos] = useState<Todo[]>([])
  
  return (
    <div className="header">
      <h1 className="header__title">Taskify</h1>
      <InputField todo={todo} setTodo= {setTodo}  />
    </div>
  );
}

export default App;
