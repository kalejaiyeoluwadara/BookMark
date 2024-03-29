import React from "react";

function Button({ name, blue }) {
  return (
    <button
      className={`w-auto px-2 sm:px-6 ${
        blue
          ? "bg-blue-600 hover:text-indigo-600  "
          : "bg-gray-400  hover:text-black      "
      }   h-[50px]  hover:bg-white shadow-md rounded-[5px] flex items-center justify-center text-[15px] sm:text-[16px] hover:border-gray-400 hover:border-2 text-white font-[600] `}
    >
      {name}
    </button>
  );
}

export default Button;
