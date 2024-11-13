import React from "react";

const Search = () => {
  return (
    <div className="flex items-center gap-3 border rounded-lg px-[28px] py-[15px] shadow-md w-full max-w-[480px] bg-elements">
      <button className="text-color-text hover:text-color-text/35 ansition-colors duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a7 7 0 017 7c0 1.194-.335 2.319-.916 3.28L21 20l-1.414 1.414-4.916-4.916A7 7 0 1111 4z"
          ></path>
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search for a country"
        className="flex-grow outline-none bg-transparent text-color-text placeholder-color-placeholder px-2 text-[14px]"
      />
    </div>
  );
};

export default Search;
