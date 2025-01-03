import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodoContext } from "../contexts/todo-context";

const EditTodo = () => {
  const params = useParams();
  const { todos, setTodos } = useContext(TodoContext);
  const navigate = useNavigate();

  // Find the current todo based on the id from params
  const currentTodo = todos.find((todo) => todo.id === Number(params.id));

  // Manage the input value as state
  const [inputValue, setInputValue] = useState(currentTodo?.text || "");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    // Update the todo in the context
    const updatedTodos = todos.map((todo) =>
      todo.id === currentTodo.id ? { ...todo, text: inputValue } : todo
    );
    setTodos(updatedTodos);

    // Navigate back to the main list
    navigate("/");
  };

  return (
    <div className="px-20">
      <input
        className=" bg-purple-100 text-lg font-semibold  border py-1 px-2 w-96 rounded-lg mb-2 shadow-md"
        value={inputValue}
        onChange={handleInputChange}
        type="text"
      />
      <button
        className="bg-amber-500 text-white py-1 px-3 rounded-md text-lg font-medium ml-3"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default EditTodo;
