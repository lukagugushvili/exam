import React, { useEffect, useState } from "react";

const Todo = () => {
  interface Todo {
    id: number;
    text: string;
  }

  const [todo, setTodo] = useState<string>("");
  const [todoArr, setTodoArr] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (todo === "") {
      alert("sorry");
    } else {
      setTodoArr([...todoArr, { id: Date.now(), text: todo }]);
      setTodo("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    const deleteTodo = todoArr.filter((item) => item.id !== id);
    setTodoArr(deleteTodo);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <div>
        {todoArr.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Todo;
