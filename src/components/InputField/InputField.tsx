import "./InputField.scss"

interface InputProps {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<InputProps> = ({ todo, setTodo}) => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button className="input__submit" type="submit">Go</button>
    </form>
  )
}

export default InputField;