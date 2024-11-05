import { useState } from "react"
import { Nav } from "../Nav"
import { Todo } from "../ui/Todo"
import { TodosBody } from "../ui/TodosBody"
import { ListStatus } from "../../types"
import { useGetTodosList } from "../../hooks/useGetTodosList"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { changeTodoStatus } from "../../store/todosSlice"
import { TodoForm } from "../TodoForm"
import { STodosWrap } from "./TodosContainer.styled"

export const TodosContainer = () => {

  const [listStatus, setListStatus] = useState<ListStatus>('All')
  const dispatch = useAppDispatch()
  const {todosList, activeListCount} = useGetTodosList(listStatus)

  return (
    <TodosBody>
      <Nav
        activeListCount={activeListCount}
        listStatus={listStatus}
        setListStatus={setListStatus}
      />
      <TodoForm />
      <STodosWrap>
        {todosList.map(item => (
          <Todo
            key={item.id}
            status={item.status} 
            text={item.todoText}
            handleClick={() => dispatch(changeTodoStatus(item.id))}
          />
        ))}
      </STodosWrap>
    </TodosBody>
  )
}