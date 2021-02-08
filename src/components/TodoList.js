import Todo from "./Todo";
import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import useRequest from "../hooks/useRequest";
import { makeUrgent } from "../utils/upperCase";

// function useRequest(){
//   return {
//     status: "success",
//     statusCode: 200,
//     message: "",
//     data: [{}, {}, {}],
//   }
// }

// function useRequest(){
//   return {
//     status: "loading",
//     statusCode: null,
//     message: "Loading plz wait",
//     data: null,
//   }
// }

export default function TodoList() {
  const { status, statusCode, message, data } = useRequest(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div>
      LIST
      <div>
        {status === "loading" && <Loading message={message} />}
        {status === "error" && <Error message={message} />}
        {status === "success" && (
          <>
            {data?.map((todo) => (
              <Todo
                title={todo.completed ? todo.title : makeUrgent(todo.title)}
                completed={todo.completed}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
