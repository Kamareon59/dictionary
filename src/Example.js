import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example mt-2">
        <span className="accent-green">Example:</span>{" "}
        <em>"{props.example}"</em>{" "}
      </div>
    );
  }
}
