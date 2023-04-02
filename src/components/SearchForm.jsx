import React from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = React.useState("");

  const handleText = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching For ${searchText}`);
  };

  return (
    <section className="search--form">
      <input
        placeholder="Search Location..."
        type="text"
        onChange={handleText}
        value={searchText}
      />
      <button className="search--button" type="button" onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          className="search--button-icon"
        >
          <path
            fill="white"
            d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
          />
        </svg>
      </button>
    </section>
  );
}
