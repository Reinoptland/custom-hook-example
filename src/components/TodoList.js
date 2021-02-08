import Todo from "./Todo";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";

export default function TodoList() {
  const [data, setData] = useState({
    status: "loading",
    statusCode: null,
    message: "Loading, plz wait",
    todos: null,
  });

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setData({
          status: "success",
          statusCode: response.status,
          message: response.statusText,
          todos: response.data,
        });
      } catch (error) {
        console.log(error.response);
        let message = "";
        switch (error.response.status) {
          case 404:
            message = "Not found, does this list exist?";
            break;

          default:
            message = "Something went wrong, try to refresh";
            break;
        }

        setData({
          status: "error",
          statusCode: error.response.status,
          message: message,
          todos: null,
        });
      }
    }

    fetchTodos();
  }, []);

  console.log("DATA IN COMPONENT:", data);

  return (
    <div>
      LIST
      <div>
        {data.status === "loading" && <Loading message={data.message} />}
        {data.status === "error" && <Error message={data.message} />}
        {data.status === "success" && (
          <>
            {data.todos?.map((todo) => (
              <Todo title={todo.title} completed={todo.completed} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
