/*
 *   Copyright (c) 2021 Matthieu Leperlier
 *   All rights reserved.
 */
import "src/components/Generator.css";

import { useState } from "react";

const Generator = (props) => {
  const [wordCount, setWordCount] = useState(props.wordCount || 5);
  const [results, setResults] = useState(null);

  const [useSpaces, setUseSpaces] = useState(false);
  const [capitalize, setCapitalize] = useState(false);
  const [useDelimiter, setUseDelimiter] = useState(false);
  const [useSpecialPadding, setUseSpecialPadding] = useState(false);
  const [useLeetSpeak, setUseLeetSpeak] = useState(false);

  const [capitalizeEveryWord, setCapitalizeEveryWord] = useState(false);
  const [delimiter, setDelimiter] = useState("-");
  const [specialCharacter, setSpecialCharacter] = useState("@");

  const generate = () => {
    let generated = [];

    for (let i = 0; i < wordCount; i++) {
      let code = "";
      let n = 0;
      while (n < 5) {
        code += Math.floor(Math.random() * (6 - 1 + 1) + 1);
        n++;
      }
      generated.push({ code: code, word: props.words[code] });
    }

    console.log(generated);
    setResults(generated);
  };

  return (
    <div className="Generator">
      <button className="Generator__button" onClick={generate}>
        Generate
      </button>
      {results && (
        <div className="Generator__results">
          <ul className="Generator__resultsList">
            {results.map((e, i) => {
              return (
                <li key={i} className="Generator__resultsItem">
                  {e.word}
                  <span className="Generator__resultsItemCode">{e.code}</span>
                </li>
              );
            })}
          </ul>
          {/*<code className="Generator__resultsCode">
            {results.map((e, i) => {
              return e.word;
            })}
          </code>*/}
          <GeneratorResultsCode
            {...{
              results,
              useSpaces,
              capitalize,
              useDelimiter,
              useSpecialPadding,
              useLeetSpeak,
              capitalizeEveryWord,
              delimiter,
              specialCharacter,
            }}
          />
          <form className="Generator__resultsOptions">
            <fieldset className="Generator__optionsFieldset">
              <legend className="Generator__optionsFieldsetLegend">
                <h2 className="App__title">Settings</h2>
              </legend>
              <div className="Generator__optionsWrapper">
                <input
                  id="Generator__toggleSpaces"
                  type="checkbox"
                  onClick={(e) => {
                    setUseSpaces(e.target.checked);
                  }}
                />
                <label htmlFor="Generator__toggleSpaces">Toggle spaces</label>
                <input
                  id="Generator__toggleDelimiter"
                  type="checkbox"
                  onClick={(e) => {
                    setUseDelimiter(e.target.checked);
                  }}
                />
                <label htmlFor="Generator__toggleDelimiter">
                  Toggle delimiter
                </label>
                <input
                  id="Generator__toggleSpecialPadding"
                  type="checkbox"
                  onClick={(e) => {
                    setUseSpecialPadding(e.target.checked);
                  }}
                />
                <label htmlFor="Generator__toggleSpecialPadding">
                  Toggle special character padding
                </label>
                <input
                  id="Generator__toggleCapitalize"
                  type="checkbox"
                  onClick={(e) => {
                    setCapitalize(e.target.checked);
                  }}
                />
                <label htmlFor="Generator__toggleCapitalize">
                  Toggle capitalize
                </label>
                <input
                  id="Generator__toggleLeetSpeak"
                  type="checkbox"
                  onClick={(e) => {
                    setUseLeetSpeak(e.target.checked);
                  }}
                />
                <label htmlFor="Generator__toggleLeetSpeak">
                  Toggle 13375p34k (leetspeak)
                </label>
              </div>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
};

export default Generator;

const GeneratorResultsCode = (props) => {
  return (
    <code className="Generator__resultsCode">
      {props.results.map((e, i) => {
        let processedWord = e.word;

        if (props.capitalize || props.capitalizeEveryWord) {
          if (i === 0) {
            processedWord = e.word.replace(/^\w/, (c) => c.toUpperCase());
          }
        }

        if (
          (props.useSpaces || props.useDelimiter) &&
          i < props.results.length - 1
        ) {
          processedWord += props.useDelimiter ? props.delimiter : " ";
        }

        if (props.useSpecialPadding) {
          if (i === 0) {
            processedWord = props.specialCharacter + processedWord;
          }

          if (i === props.results.length - 1) {
            processedWord += props.specialCharacter;
          }
        }

        if (props.useLeetSpeak) {
          processedWord = processedWord.replace("a", "4");
          processedWord = processedWord.replace("b", "8");
          processedWord = processedWord.replace("g", "9");
          processedWord = processedWord.replace("e", "3");
          processedWord = processedWord.replace("i", "1");
          processedWord = processedWord.replace("l", "1");
          processedWord = processedWord.replace("o", "0");
          processedWord = processedWord.replace("r", "2");
          processedWord = processedWord.replace("s", "5");
          processedWord = processedWord.replace("t", "7");
          processedWord = processedWord.replace("z", "2");
        }
        
        return processedWord;
      })}
    </code>
  );
};
