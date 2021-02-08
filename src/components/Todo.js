import React from "react";
export default function Todo({ title, completed }) {
  return (
    <div>
      {title}
      {/* <input type="checkbox" checked={completed} /> */}
    </div>
  );
}
