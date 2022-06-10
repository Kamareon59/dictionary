import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <span className="Phonetics">
      <a
        href={props.phonetic.audio}
        className="ph-audio"
        target="_blank"
        rel="noreferrer"
      >
        🔊
      </a>
      <span className="ph-text">{props.phonetic.text}</span>
    </span>
  );
}
