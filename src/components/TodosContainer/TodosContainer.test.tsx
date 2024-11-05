import { render, screen } from "@testing-library/react";
import { TodosContainer } from ".";
import * as reduxHooks from 'react-redux'

jest.mock('react-redux')

describe('TodoList', () => {
  it('create empty todo list container', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);
    jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(jest.fn());

    render(<TodosContainer />)
    
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.queryByRole('listitem')).toBeNull()
  })

  it('create container with todo lists', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([[
      { "id": 1, "status": "completed", "todoText": "Изучить React" },
      { "id": 2, "status": "completed", "todoText": "Изучить Redux-toolkit" },
      { "id": 3, "status": "active", "todoText": "Изучить NextJS" },
      { "id": 4, "status": "active", "todoText": "Изучить React Native" },
      { "id": 5, "status": "active", "todoText": "Получить власть над миром" },
    ]]);
    jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(jest.fn());

    render(<TodosContainer />)
    
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByRole('listitem')).toBeInTheDocument()
  })
})