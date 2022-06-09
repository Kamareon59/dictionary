import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function loadPage() {
    setLoaded(true);
    search();
  }

  function logKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    // API documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a word"
            onChange={logKeyword}
            className="search-bar"
          />
          <input type="button" value="🔎" className="search-btn" />
        </form>
        <div className="suggestion">
          <span>May I suggest:</span> idyllic, petrichor, serendipity,
          mellifluous
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    loadPage();
    return "Loading the Plain & Simple dictionary...";
  }
}
