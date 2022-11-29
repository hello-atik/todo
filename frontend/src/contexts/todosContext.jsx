import { useState, createContext } from "react";

const TodosContext = createContext();

const todosState = [
  {
    title: "This is some random todo",
    priority: "normal",
    description: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor",
  },
  {
    title: "This is some random todo",
    priority: "medium",
    description:
      "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor lorem impusm dolor sit amet",
  },
  { title: "This is some random todo", description: "", priority: "high" },
  {
    title: "This is some random todo",
    priority: "low",
    description: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor",
  },
  { title: "This is some random todo", description: "", priority: "high" },
  {
    title: "This is some random todo",
    priority: "medium",
    description: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor",
  },

  {
    title: "This is some random todo",
    priority: "medium",
    description: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor",
  },
  {
    title: "This is some random todo",
    priority: "low",
    description: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor",
  },
  {
    title: "This is some random todo",
    priority: "high",
    description: "lorem ipsum dolor sit amet, consectetur lorem ipsum dolor",
  },
];

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(todosState);
  const [fetching, setFetching] = useState(false);

  const fetchTodos = () => {};
  const createTodo = () => {};
  const updateTodo = () => {};
  const deleteTodo = () => {};

  const state = {
    todos,
    fetching,

    fetchTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };

  return (
    <TodosContext.Provider value={state}>{children}</TodosContext.Provider>
  );
};

export { TodosContext, TodosContextProvider };
