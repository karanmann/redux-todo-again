import Header from "./Header";
import TaskForm from "./TaskForm";
import TodosList from "./TodosList";

const TodoWrapper = () => {
  return (
    <>
      <Header />
      <TaskForm />
      <TodosList />
    </>
  );
};

export default TodoWrapper;