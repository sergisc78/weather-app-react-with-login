import React from "react";

export const AlertComponent = ({ message }) => {
  return (
    <div className="bg-red-300 border-2 border-red-950 text-black px-4 py-3 rounded relative mb-2 mt-5 text-center">
      <span className="sm:inline block">{message}</span>
    </div>
  );
};
