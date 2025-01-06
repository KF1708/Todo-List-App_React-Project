import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className=" p-3">
      <div className="main-layout text-center pt-5 pb-28 pl-28 bg-cover rounded-md">
        <h1 className="text-white text-5xl font-bold font-serif mb-5">
          TODO APP
        </h1>
        <h3 className="text-teal-400 text-2xl font-bold mb-5">
          Make Todo List
        </h3>
      </div>
      <div className=" py-5 px-12">
        <div className="flex justify-around">
          <Link
            className="p-2 rounded-md text-2xl font-bold text-sky-700 bg-sky-100"
            to="/"
          >
            All Todos
          </Link>
          <Link
            className="p-2 rounded-md text-2xl font-bold text-green-700 bg-green-50"
            to="/completed"
          >
            Completed
          </Link>
          <Link
            className="p-2 rounded-md text-2xl font-bold text-red-700 bg-red-100"
            to="/incompleted"
          >
            Incompleted
          </Link>
          <Link
            className="p-2 rounded-md text-2xl font-bold text-purple-700 bg-purple-100"
            to="/add-todo"
          >
            Add todo
          </Link>
        </div>
      </div>
      <section className="p-1">
        <Outlet />
      </section>
    </div>
  );
};

export default MainLayout;
