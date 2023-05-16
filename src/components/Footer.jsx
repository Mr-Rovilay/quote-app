import React from "react";

function Footer() {
  var name = "Ayodeji";
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        QuoteApp created by {name} Copyright ⓒ {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
