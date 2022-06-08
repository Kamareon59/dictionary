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
            <li key={index} className="mb-4">
              Definition: {definition.definition}
              <br />
              <Example example={definition.example} />
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
