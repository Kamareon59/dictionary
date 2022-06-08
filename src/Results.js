import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index} className="mb-3">
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        <div>
          <Synonyms synonyms={props.results.meanings[0].synonyms} />
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
