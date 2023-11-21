import React from "react";

const MenuButton = ({ children }) => {
  return (
    <button
      type="button"
      class="py-3 m-2 w-full px-4 inline-flex flex flex-col justify-center  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      {children}
    </button>
  );
};

export default MenuButton;
