import React from "react";
import useFetchTodos from "./useFetchTodos";
import useDeleteTodo from "./useDeleteTodo";


function App() {

  const { data } = useFetchTodos();
  const { mutateAsync } = useDeleteTodo();


  const remove = async (id) => {
    console.log(typeof id);
    const result = await mutateAsync({ id });
    console.log(result);
  };


  return (

    <>
      {data && data.map(todo => (
        <div className="todo" key={todo.id}>
          <div className="title">{todo.title}</div>
          <div className="body" style={{
            textDecoration: todo.completed ? "line-through" : "underline"
          }}>{todo.body}</div>
          <button className="delete" onClick={() => remove(todo.id)}>DELETE</button>
        </div>
      ))}
    </>
  );
}

export default App;
