import { useContext } from "react";
import { TodoContext } from "../contexts/todo-context";

const Incompleted = () => {
  const { todos } = useContext(TodoContext);

  const incompletedTodo = todos?.filter((todo) => !todo.isCompleted);

  console.log(incompletedTodo);

  return (
    <div className=" px-20 py-5">
      {incompletedTodo?.map((todo) => (
        <div className="" key={todo.id}>
          <p className=" bg-red-100 text-lg font-semibold  border py-1 px-2 w-96 rounded-lg mb-2 shadow-md">
            {todo.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Incompleted;
