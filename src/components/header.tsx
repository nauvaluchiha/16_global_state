import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Header() {
  const [ showMenu, setShowMenu ] = useState(false)

  return (
    <header className="relative z-10">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Simple Header
            </span>
          </Link>
          <Button
            data-collapse-toggle="navbar-default"
            type="button"
            className="bg-zinc-100 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </Button>
          <div className={`${showMenu ? "" : "hidden"} top-14 -ml-4 absolute w-full lg:block lg:w-auto lg:static lg:ml-0`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              <li className="">
                <Link
                  to="/"
                  className="block text-center py-2 pl-4 pr-4 text-white bg-blue-500 rounded dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block text-center py-2 pl-3 pr-4 text-blue-500 font-semibold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:px-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent cursor-default"
                  onClick={(e) => e.preventDefault()}
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block text-center py-2 pl-3 pr-4 text-blue-500 font-semibold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:px-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block text-center py-2 pl-3 pr-4 text-blue-500 font-semibold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:px-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent cursor-default"
                  onClick={(e) => e.preventDefault()}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block text-center py-2 pl-3 pr-4 text-blue-500 font-semibold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:px-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent cursor-default"
                  onClick={(e) => e.preventDefault()}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block text-center py-2 pl-3 pr-4 text-blue-500 font-semibold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:px-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent cursor-default"
                  onClick={(e) => e.preventDefault()}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="block text-center py-2 pl-3 pr-4 text-blue-500 font-semibold rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:px-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent cursor-default"
                  onClick={(e) => e.preventDefault()}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
