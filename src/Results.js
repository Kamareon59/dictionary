import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <span key={index}>
                <Phonetics phonetic={phonetic} />
              </span>
            );
          })}
          <div>
            <Synonyms synonyms={props.results.meanings[0].synonyms} />
          </div>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meanings meanings={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
