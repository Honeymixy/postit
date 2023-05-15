/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbarr = () => {
  const { token, logOutUser } = useContext(AuthContext);

  return (
    <nav className="d-flex justify-content-between align-items-center px-4 py-3 mx-auto mw-1240">
      <Link to="/" className="fs-2 fw-bold text-decoration-none text-dark">
        Post<span className="text-blue">it</span>
      </Link>
      <div className="d-flex gap-3 align-items-center">
        <Link
          to="/dashboard"
          className=" text-decoration-none text-black fw-semibold fs-4"
        >
          Stories
        </Link>
        <Link
          className=" text-decoration-none text-black fw-semibold fs-4"
          to="#"
        >
          Contact
        </Link>
        {token ? (
          <Link
            onClick={() => {
              logOutUser();
            }}
            className=" text-decoration-none text-black fw-semibold fs-4"
            to="/"
          >
            Log Out
          </Link>
        ) : (
          <div className="d-flex gap-3 align-items-center">
            <Link
              className=" text-decoration-none text-black fw-semibold fs-4"
              to="/login"
            >
              Sign In
            </Link>
            <Link
              className="btn btn-bg-main text-white px-3 py-1 fw-semibold fs-4"
              to="/login"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbarr;
