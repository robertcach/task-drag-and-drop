import { useRef } from "react"
import "./InputField.scss"

interface InputProps {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<InputProps> = ({ todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className="input" onSubmit={e => {
        handleAdd(e)
        inputRef.current?.blur()
        }
      }>
      <input
        ref={inputRef}
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