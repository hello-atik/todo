import { useContext } from "react";
import Masonry from "react-masonry-css";

// todos context.
import { TodosContext, TodosContextProvider } from "../contexts/todosContext";

// material-ui components.
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack ";

// react components.
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

// import css.
import "../styles/style.css";

// custom styles.
const styles = {
  todos: {
    pb: 20,
    width: "70%",
    overflow: "auto",
    height: `calc(100vh - 100px)`,
    "&::-webkit-scrollbar": { display: "none" },
  },
  todoForm: {
    width: "30%",
  },
};

const TodosMasonry = () => {
  const { todos } = useContext(TodosContext);

  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </Masonry>
  );
};

const Todos = () => {
  return (
    <Stack
      spacing={3}
      direction="row"
      sx={{ width: "100%" }}
      justifyContent="space-between"
    >
      <TodosContextProvider>
        <Box sx={styles.todos}>
          <TodosMasonry />
        </Box>
        <Box sx={styles.todoForm}>
          <TodoForm />
        </Box>
      </TodosContextProvider>
    </Stack>
  );
};

export default Todos;
