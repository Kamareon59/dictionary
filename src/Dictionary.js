import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [loaded, setLoaded] = useState(false);
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState([]);

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
    // Dictionary API documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => {
        setResults(null);
      });

    // Photo API documentation: https://www.pexels.com/api/documentation/?#
    let pexelsKey = "563492ad6f91700001000001e9061c051cbb4093a82524345e620f89";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsKey}` } })
      .then(handlePexelResponse)
      .catch(() => {
        setPhotos([]);
      });
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
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
          <span>May I suggest:</span> petrichor, mellifluous, serendipity,
          capricious
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    loadPage();
    return "Loading the Plain & Simple dictionary...";
  }
}
