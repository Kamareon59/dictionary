import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="mt-5 mb-3 brush-stroke d-flex flex-column justify-content-center">
          <h1 id="title">Plain & simple</h1>
          <h2 id="subtitle">A humble dictionary</h2>
        </header>
        <main>
          <Dictionary defaultKeyword="idyllic" />
        </main>
        <footer>
          <a href="https://github.com/Kamareon59/dictionary">
            Open-source code
          </a>{" "}
          by{" "}
          <a href="https://marit-versteeg-portfolio.netlify.app/">
            Marit Versteeg
          </a>
          , hosted on <a href="https://www.netlify.com/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
