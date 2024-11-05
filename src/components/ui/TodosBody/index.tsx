import { FC, ReactNode } from "react"
import { STodosBody } from "./TodosBody.styled"

interface TodosBodyProps {
  children: ReactNode
}

export const TodosBody: FC<TodosBodyProps> = ({children}) => {

  return (
    <STodosBody>
      {children}
    </STodosBody>
  )
}