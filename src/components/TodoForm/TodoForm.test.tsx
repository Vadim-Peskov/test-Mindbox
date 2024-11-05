import { render, screen } from "@testing-library/react";
import { TodoForm } from ".";
import * as reduxHooks from 'react-redux'
import userEvent from "@testing-library/user-event";
import { Button } from "../ui/Button";

jest.mock('react-redux')

describe('add text in todo form', () => {
  it('typing in textinput', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);
    jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(jest.fn());
  
    render(<TodoForm />)
  
    expect(screen.queryByDisplayValue('new todo')).toBeNull()
    userEvent.type(screen.getByRole('textbox'), 'new todo')
    expect(screen.queryByDisplayValue('new todo')).toBeInTheDocument()
  })

  it('click on button', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);
    jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(jest.fn());
  
    const handleClickMock = jest.fn()

    const button = <Button text="Add todo" handleClick={handleClickMock}/>
    render(button)
    userEvent.click(screen.getByRole('button'))
    expect(handleClickMock).toHaveBeenCalledTimes(1)
  })
})