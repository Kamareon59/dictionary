import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example mt-2">
        Example: <em>"{props.example}"</em>{" "}
      </div>
    );
  }
}
