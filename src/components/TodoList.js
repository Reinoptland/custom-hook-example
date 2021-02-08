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
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(data);
    }

    fetchTodos();
  }, []);

  console.log(data);

  return <div>LIST</div>;
}
