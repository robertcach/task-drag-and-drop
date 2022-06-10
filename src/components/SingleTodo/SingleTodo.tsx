import { Todo } from "../../types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md"

interface Props {
  todo: Todo,
  todos: Todo[],
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo = ({ todo, todos, setAllTodos }: Props) => {
  const handleDone = (id: number) => {
    setAllTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      }
    ))
  }

  const handleDelete = (id: number) => {
    setAllTodos(todos.filter(todo => {
      return todo.id !== id
    }))
  }


  return (
    <form>
      {todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}

      <div>
        <span onClick={() => {console.log("edit")}}><AiFillEdit /></span>
        <span onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
        <span onClick={() => handleDone(todo.id)}><MdDone /></span>
      </div>   
    </form>
  )
}

export default SingleTodo