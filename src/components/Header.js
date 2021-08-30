/*
 *   Copyright (c) 2021 Matthieu Leperlier
 *   All rights reserved.
 */
import "src/components/Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <h1 className="Header__title App__title">
        <span className="Header__titlePartOne">pretty</span>
        <span className="Header__titlePartTwo">diceware</span>
      </h1>
    </header>
  );
};

export default Header;
