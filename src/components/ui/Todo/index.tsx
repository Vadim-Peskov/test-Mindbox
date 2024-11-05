import { FC } from "react"
import { TodoStatus } from "../../../types"
import { STodo } from "./Todo.styled"
import { Checkbox } from "../Checkbox"

interface TodoProps {
  text: string
  status: TodoStatus
  handleClick: (...args: any[]) => void;
}

export const Todo: FC<TodoProps> = ({ text, status, handleClick }) => {

  return (
    <STodo
      status={status}
      onClick={handleClick}
    >
      <Checkbox checked={status === 'completed'}/>
      {text}
    </STodo>
  )
}