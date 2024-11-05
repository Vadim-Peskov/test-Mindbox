import { ListStatus } from "../types"
import { useAppSelector } from "./useAppSelector"

export const useGetTodosList = (status: ListStatus) => {
  let todosList = useAppSelector(state => state.todos.todos)
  const activeList = todosList.filter(item => item.status === 'active')
  const activeListCount = activeList.length

  if (status === 'Active') todosList = activeList
  if (status === 'Completed') todosList = todosList.filter(item => item.status === 'completed')
  
  return {todosList, activeListCount}
}