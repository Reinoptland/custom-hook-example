import React, { useState, useEffect } from "react";

// SUCCESS
// {
//     status: 'succes',
//     todos: [{ description: "Make a todo app", done: false }],
// }

// ERRORS
// {
//     status: 'error',
//     statusCode: 400,
//     message: 'Oopsie'
// }

// Loading
// {
//     status: 'loading',
// }

// Final schema
// {
//     status: string,
//     statusCode: number || null,
//     message: string || null,
//     todos: array || null,
// }

export default function TodoList() {
  const [data, setData] = useState({
    status: "loading",
    statusCode: null,
    message: "Loading, plz wait",
    todos: null,
  });

  return <div>LIST</div>;
}
