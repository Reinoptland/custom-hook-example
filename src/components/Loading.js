import React from "react";

export default function Loading({ message = "Loading" }) {
  return <div style={{ backgroundColor: "orange" }}>{message}</div>;
}
