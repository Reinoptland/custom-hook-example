import React from "react";

export default function Error({ message = "Error, plz try refreshing" }) {
  return <div style={{ backgroundColor: "red" }}>{message}</div>;
}
