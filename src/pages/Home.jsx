import { useContext } from "react";
import { TodoContext } from "../contexts/todo-context";
import { Link } from "react-router-dom";

const Home = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      {todos.length === 0 ? (
        <h1 className="text-center text-red-500 text-2xl font-medium">
          No todo found!
        </h1>
      ) : (
        todos.map((todo) => (
          <div className="flex justify-center gap-4 p-2" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleCheck(todo.id)}
            />
            <p
              className={`text-lg font-medium border py-2 px-2 w-96 rounded-lg ${
                todo.isCompleted ? "line-through" : ""
              }`}
            >
              {todo.text}
            </p>
            <button
              className="bg-red-500 text-white py-1 px-3 rounded-md text-lg font-medium"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
            <Link to={`/edit-todo/${todo.id}`}>
              <button className="bg-green-500 text-white py-2 px-3 rounded-md text-lg font-medium">
                Edit
              </button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
