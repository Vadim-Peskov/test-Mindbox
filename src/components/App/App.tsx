import { Container } from '../ui/Container'
import { TodosTitle } from '../ui/TodosTitle'
import { TodosContainer } from '../TodosContainer'
import { AppBg } from '../ui/AppBg'

const App = () => {
  return (
    <AppBg>
      <Container>
        <TodosTitle text='Todo list'/>
        <TodosContainer />
      </Container>
    </AppBg>
  );
}

export default App
