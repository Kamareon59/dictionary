import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="mt-5">
          <h1>Plain & Simple</h1>
          <h2>A Humble Dictionary</h2>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            <a href="https://github.com/Kamareon59/dictionary">
              Open-source code
            </a>{" "}
            by{" "}
            <a href="https://marit-versteeg-portfolio.netlify.app/">
              Marit Versteeg
            </a>
            , hosted on <a href="https://www.netlify.com/">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
