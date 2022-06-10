import { Todo } from "../../types"
import SingleTodo from "../SingleTodo/SingleTodo"

interface Props {
  todos: Todo[],
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setAllTodos }) => {
  return (
    <div>
      {todos.map(todo => (
        <SingleTodo key={todo.id} todo={todo} todos={todos} setAllTodos={setAllTodos} />
        )
      )}
    </div>
  )
}

export default TodoList