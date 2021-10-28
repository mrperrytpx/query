import React from 'react';

export default function Todos({ todo }) {
  return (
    <div>
      <div className="todo" key={todo.id}>
        <div className="title">{todo.title}</div>
        <div className="body" style={{
          textDecoration: todo.completed ? "line-through" : "underline"
        }}>{todo.body}</div>
        <button className="delete" onClick={() => remove(todo.id)}>DELETE</button>
      </div>
    </div>
  );
}
