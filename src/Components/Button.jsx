import React from "react";

function Button({ name }) {
  return (
    <button className="w-[160px] opacity-[0.7] h-[50px] border-2 border-gray-800 hover:border-indigo-600 hover:text-indigo-600 rounded-[3px] flex items-center justify-center text-[16px] font-[600] ">
      {name}
    </button>
  );
}

export default Button;
