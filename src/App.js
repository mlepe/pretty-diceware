/*
 *   Copyright (c) 2021 Matthieu Leperlier
 *   All rights reserved.
 */
import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import data from "src/data/eff_large_converted.json";
import Generator from "src/components/Generator";
import Header from "src/components/Header";

function App() {
  const [words, setWords] = useState([]);
  useEffect(() => {
    let w = [];
    data.root.row.forEach((e) => {
      w[e.col1] = e.col2;
    });
    setWords(w);
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <main className="Content">
        <Generator words={words} wordCount={5}></Generator>
      </main>
    </div>
  );
}

export default App;
