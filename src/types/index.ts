export type TodoStatus = 'active' | 'completed'
export type ListStatus = 'All' | 'Active' | 'Completed'

export type Todo = {
  id: number
  status: TodoStatus
  todoText: string
}