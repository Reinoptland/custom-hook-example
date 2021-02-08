import Todo from "./Todo";
import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import useRequest from "../hooks/useRequest";
import { makeUrgent } from "../utils/upperCase";

export default function TodoList() {
  const { status, statusCode, message, data } = useRequest();

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
