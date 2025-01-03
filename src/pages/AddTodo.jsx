import { useContext, useState } from "react";
import { TodoContext } from "../contexts/todo-context";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim() === "") {
      alert("Todo name cannot be empty!");
      return;
    }

    const newTodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      text: todo.trim(),
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };

  return (
    <div className="text-center">
      <div>
        <input
          className="border py-2 px-2 w-96 rounded-lg mr-3"
          type="text"
          value={todo}
          onChange={handleInputChange}
          placeholder="Enter todo name here"
        />
        <button
          className="bg-blue-500 text-white py-2 px-3 rounded-md text-base font-normal"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      {todos.length === 0 && (
        <h1 className="text-center text-red-300 text-xl font-medium mt-4">
          Please Enter Todo!
        </h1>
      )}
    </div>
  );
};

export default AddTodo;
