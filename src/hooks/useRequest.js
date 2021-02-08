import axios from "axios";
import { useState, useEffect } from "react";

export default function useRequest() {
  const [data, setData] = useState({
    status: "loading",
    statusCode: null,
    message: "Loading, plz wait",
    data: null,
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
          data: response.data,
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

  console.count("USE REQUEST RAN"); // 2 times (maybe more logs because strict mode?)
  console.log(data);
  return data;
}
