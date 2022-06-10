import { Todo } from "../../types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md"

interface Props {
  todo: Todo,
  todos: Todo[],
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setAllTodos }: Props) => {
  return (
    <form>
      <span>{todo.todo}</span>
      <div>
        <span><AiFillEdit /></span>
        <span><AiFillDelete /></span>
        <span><MdDone /></span>
      </div>   
    </form>
  )
}

export default SingleTodo