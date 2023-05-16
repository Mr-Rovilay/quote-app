import React from "react";

function Header() {
  return (
    <header className="head">
      <h1>QuoteApp</h1>
      <div className="search-bar">
        <input
          type="text"
          class="form-control"
          placeholder="Search more Quote here..."
        ></input>
        <button type="button" class="btn btn-warning">
          Search
        </button>
      </div>
    </header>
  );
}

export default Header;
