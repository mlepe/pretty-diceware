/*
 *   Copyright (c) 2021 Matthieu Leperlier
 *   All rights reserved.
 */
import "src/components/About.css";

const About = (props) => {
  return (
    <div className="About">
      <h2 className="About__title App__title">
        <span className="App__thinTitle">About</span>diceware
      </h2>
      <div className="About__description">
        <p>
          Diceware is a method for creating passphrases, passwords, and other
          cryptographic variables using ordinary dice as a hardware random
          number generator. For each word in the passphrase, five rolls of a
          six-sided die are required. The numbers from 1 to 6 that come up in
          the rolls are assembled as a five-digit number, e.g. 43146. That
          number is then used to look up a word in a word list, for example in
          the original list 43146 corresponds to munch. By generating several
          words in sequence, a lengthy passphrase can be constructed randomly.
        </p>
        <p>
          A Diceware word list is any list of 6^3 = 7776 unique words,
          preferably ones the user will find easy to spell and to remember. The
          contents of the word list do not have to be protected or concealed in
          any way, as the security of a Diceware passphrase is in the number of
          words selected, and the number of words each selected word could be
          taken from.
        </p>
        <span className="About__source">
          Source:{" "}
          <a href="https://en.wikipedia.org/wiki/Diceware" target="_blank" rel="noreferrer">
            Wikipedia
          </a>
        </span>
      </div>
    </div>
  );
};

export default About;
