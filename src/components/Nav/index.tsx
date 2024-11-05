import { FC } from "react"
import { ListStatus } from "../../types"
import { SActiveItemsCount, SNav, SNavContainer } from "./Nav.styled"
import { Button } from "../ui/Button"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { clearCompletedTodos } from "../../store/todosSlice"

interface NavProps {
  activeListCount: number
  listStatus: ListStatus
  setListStatus: React.Dispatch<React.SetStateAction<ListStatus>>
}

export const Nav: FC<NavProps> = ({ activeListCount, listStatus, setListStatus }) => {
  const dispatch = useAppDispatch()

  const changeStatus = (text: ListStatus) => {
    if (text === 'All') setListStatus("All")
    if (text === 'Active') setListStatus("Active")
    if (text === 'Completed') setListStatus("Completed")
  }

  const clearTodos = () => dispatch(clearCompletedTodos())

  return (
    <SNavContainer>
      <SActiveItemsCount>{activeListCount} items left</SActiveItemsCount>
      <SNav>
        <Button
          text='All'
          type="button"
          isActive={listStatus === 'All'}
          handleClick={() => changeStatus('All')}
        />
        <Button
          text='Active'
          type="button"
          isActive={listStatus === 'Active'}
          handleClick={() => changeStatus('Active')}
        />
        <Button
          text='Completed'
          type="button"
          isActive={listStatus === 'Completed'}
          handleClick={() => changeStatus('Completed')}
        />
      </SNav>
      <Button
        data-clear
        type="button"
        text='Clear completed'
        handleClick={() => clearTodos()}
      />
    </SNavContainer>
  )
}