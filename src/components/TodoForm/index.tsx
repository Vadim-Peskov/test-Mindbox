import { useState } from "react"
import { Button } from "../ui/Button"
import { TodoInput } from "../ui/TodoInput"
import { STodoForm } from "./TodoForm.styled"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { addTodo } from "../../store/todosSlice"

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()

  const addNewTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue.trim()))
      setInputValue('')
    }
    else {
      if (inputValue !== '') setInputValue('')
    }
  }

  const keyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Escape' && inputValue !== '') setInputValue('')
    if (e.code === 'Enter') addNewTodo()
  }

  return (
    <STodoForm>
      <TodoInput
        type='text'
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeholder="Enter the new todo text"
        onKeyDown={(e) => keyDown(e)}
      />
      <Button
        text='Add todo'
        type="button"
        handleClick={addNewTodo}
      />
    </STodoForm>
  )
}