import { useState } from "react";
import { TodoContext } from "./contexts/todo-context";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout.jsx/MainLayout";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Incompleted from "./pages/Incompleted";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoContext.Provider
        value={{
          todos,
          setTodos,
        }}
      >
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/incompleted" element={<Incompleted />} />
            <Route path="/add-todo" element={<AddTodo />} />
            <Route path="/edit-todo/:id" element={<EditTodo />} />
          </Route>
        </Routes>
      </TodoContext.Provider>
    </>
  );
}

export default App;
