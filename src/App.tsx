import "./App.scss";
import InputField from "./components/InputField/InputField";


const App: React.FC = () => {
  return (
    <div className="header">
      <h1 className="header__title">Taskify</h1>
      <InputField />
    </div>
  );
}

export default App;
