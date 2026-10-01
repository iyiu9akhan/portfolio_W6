import React from "react";
import Container from "./Container";

function Navbar() {
  const menu = (
    <>
      <li className="capitalize group">
        <a
          href="#"
          className="relative inline-block before:content-['{'] before:absolute before:opacity-0 before:scale-50 before:-translate-x-5 before:transition-all before:duration-300 before:ease-in-out after:content-['}'] after:absolute after:opacity-0 after:scale-50 after:translate-x-5 after:transition-all after:duration-300 after:ease-in-out group-hover:before:opacity-100 group-hover:before:scale-100 group-hover:before:-translate-x-3 group-hover:before:text-myOrange group-hover:after:opacity-100 group-hover:after:scale-100 group-hover:after:translate-x-2 group-hover:after:text-myOrange"
        >
          home
        </a>
      </li>
      <li className="capitalize group">
        <a href="#">expertise</a>
      </li>
      <li className="capitalize group">
        <a href="#">projects</a>
      </li>
      <li className="capitalize group">
        <a href="#">experiences</a>
      </li>
      <li className="capitalize group">
        <a href="#">insights</a>
      </li>
    </>
  );
  return (
    <>
      <Container>
        <div className="navbar bg-background">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {menu}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">sameerKhan</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menu}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn capitalize bg-brand text-white">resume</a>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Navbar;
