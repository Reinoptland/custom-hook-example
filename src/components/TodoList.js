import axios from "axios";
import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [data, setData] = useState({
    status: "loading",
    statusCode: null,
    message: "Loading, plz wait",
    todos: null,
  });

  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log("DATA IN USEFFECT:", response);
      setData({
        status: "success",
        statusCode: response.status,
        message: response.statusText,
        todos: response.data,
      });
    }

    fetchTodos();
  }, []);

  console.log("DATA IN COMPONENT:", data);

  return (
    <div>
      LIST{" "}
      <div>
        {data.todos?.map((todo) => (
          <div>
            {todo.title} <input type="checkbox" checked={todo.completed} />
          </div>
        ))}
      </div>
    </div>
  );
}
