import React from "react";

const Header = () => {
  return (
    <header className="h-16 bg-twitch-purple text-white shadow-lg">
      <nav id="nav-menu">
        <ul className="list-reset flex flex-row justify-left items-center h-16 ml-8">
          <li>Twi1ch React</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
