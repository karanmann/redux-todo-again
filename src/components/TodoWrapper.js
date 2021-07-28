import Header from './Header'
import TaskForm from './TaskForm'
import TodosList from './TodosList'
import styled from 'styled-components'

const TodoApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TodoWrapper = () => {
  return (
    <TodoApp>
      <Header />
      <TaskForm />
      <TodosList />
    </TodoApp>
  );
};

export default TodoWrapper;