import { useContext } from "react";
import { TodoContext } from "../contexts/todo-context";

const Completed = () => {
  const { todos } = useContext(TodoContext);

  const completedTodos = todos.filter((todo) => todo.isCompleted);

  console.log(completedTodos);

  return (
    <div className="px-20 py-5">
      {completedTodos?.map((todo) => (
        <div className="" key={todo.id}>
          <p className=" bg-green-100 text-lg font-semibold  border py-1 px-2 w-96 rounded-lg mb-2 shadow-md">
            {todo.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Completed;
