import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [data, setData] = useState({
    status: "loading",
    statusCode: null,
    message: "Loading, plz wait",
    todos: null,
  });

  console.log(data);

  return <div>LIST</div>;
}
