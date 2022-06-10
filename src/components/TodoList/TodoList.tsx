import { Todo } from "../../types"

interface Props {
  todos: Todo[],
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setAllTodos }) => {
  return (
    <div>
      {todos.map(todo => (
        <li key={todo.id}>{todo.todo}</li>
        )
      )}
    </div>
  )
}

export default TodoList