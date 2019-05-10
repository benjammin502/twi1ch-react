import React from "react";

const Footer = () => {
  return (
    <footer className="h-16 bg-twitch-purple text-white flex justify-around items-center">
      <span>
        &copy; {new Date().getFullYear()} - Benjamin Myers - Made with ☕️
        React, & Tailwind
      </span>
    </footer>
  );
};

export default Footer;
