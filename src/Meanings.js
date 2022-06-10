import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <ol>
        {props.meanings.definitions.map(function (definition, index) {
          return (
            <li key={index} className="minor-section">
              <span className="accent-purple">Definition:</span>{" "}
              {definition.definition}
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
