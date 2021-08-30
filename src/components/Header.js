/*
 *   Copyright (c) 2021 Matthieu Leperlier
 *   All rights reserved.
 */
import "src/components/Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <h1 className="Header__title App__title">
        <span className="App__thinTitle">pretty</span>diceware
      </h1>
    </header>
  );
};

export default Header;
