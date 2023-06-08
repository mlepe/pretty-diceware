/*
 *   Copyright (c) 2021 Matthieu Leperlier
 *   All rights reserved.
 */
const Footer = () => {
  return (
    <div className="Footer">
      <span>
        Made by Matthieu Leperlier{" "}
        <a href="https://github.com/mlepe">(@mlepe)</a> (c){" "}
        {getYear(new Date())}
      </span>
    </div>
  );
};

export default Footer;
