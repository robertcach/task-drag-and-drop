import { Todo } from "../../types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md"
import { useState } from "react";

interface Props {
  todo: Todo,
  todos: Todo[],
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo = ({ todo, todos, setAllTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);


  const handleDone = (id: number) => {
    setAllTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      }
    ))
  }

  const handleDelete = (id: number) => {
    setAllTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setAllTodos(todos.map(todo => (
        todo.id === id ? { ...todo, todo: editTodo } : todo
      )
    ));
    setEdit(false)
  }

  return (
    <form onSubmit={e => handleEdit(e, todo.id)}>
      {edit ? (
          <input value={editTodo} onChange={e => setEditTodo(e.target.value)}/>
        ): (
          todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>
        )
      }

      <div>
        <span onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }}
        >
          <AiFillEdit />
        </span>


        <span onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
        <span onClick={() => handleDone(todo.id)}><MdDone /></span>
      </div>   
    </form>
  )
}

export default SingleTodo