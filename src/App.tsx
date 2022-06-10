import { useState } from "react";
import "./App.scss";
import InputField from "./components/InputField/InputField";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  
  return (
    <div className="header">
      <h1 className="header__title">Taskify</h1>
      <InputField todo={todo} setTodo= {setTodo}  />
    </div>
  );
}

export default App;
