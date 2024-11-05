import todosReducer, {addTodo, changeTodoStatus, clearCompletedTodos, todosState} from './todosSlice'

describe('todoSlice', () => {
  const initial: todosState = {
    todos: [
      { "id": 1, "status": "completed", "todoText": "Изучить React" },
      { "id": 2, "status": "completed", "todoText": "Изучить Redux-toolkit" },
      { "id": 3, "status": "active", "todoText": "Изучить NextJS" },
      { "id": 4, "status": "active", "todoText": "Изучить React Native" },
      { "id": 5, "status": "active", "todoText": "Получить власть над миром" },
    ]
  }

  it('return default state', () => {
    const result = todosReducer(undefined, {type: ''})

    expect(result).toEqual(initial)
  })

  it('add new todo item with "addTodo" action', () => {
    const action = { type: addTodo.type, payload: 'newTodo' }

    const result = todosReducer(initial, action)
    expect(result.todos[0].todoText).toBe('newTodo')
  })

  it('change todo status with "changeTodoStatus" action', () => {
    const action = { type: changeTodoStatus.type, payload: 1 }

    const changedStatus = initial.todos[0].status === 'active' ? 'completed' : 'active'
    const result = todosReducer(initial, action)
    expect(result.todos[0].status).toBe(changedStatus)
  })

  it('remove todo item by id with "clearCompletedTodos" action', () => {
    const action = { type: clearCompletedTodos.type }

    const allTodosLength = initial.todos.length
    const completedTodosLength = initial.todos.filter(item => item.status === 'completed').length
    const result = todosReducer(initial, action)
    expect(result.todos.length).toBe(allTodosLength - completedTodosLength)
  })
})