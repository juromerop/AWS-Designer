"use client";
import Link from "next/link";
import PropTypes from "prop-types";

const MenuButton = ({ children, to }) => {
  const handleRedirect = () => {
    localStorage.setItem("create", to);
  };
  return (
    <Link
      href={"/" + to}
      type="button"
      onClick={handleRedirect}
      className="py-3 m-2 w-full px-4 inline-flex flex-col justify-center  items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      {children}
    </Link>
  );
};

MenuButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MenuButton;
