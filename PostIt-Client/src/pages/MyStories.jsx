/** @format */

import React, { useContext, useEffect, useState } from "react";
import RootLayout from "../layouts/RootLayout";
import { Link, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const MyStories = () => {
  const { token, logOutUser, baseURL } = useContext(AuthContext);
  const [currentSection, setCurrentSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/my-stories") {
      setCurrentSection("/my-stories");
    } else if (location.pathname === "/my-stories/published") {
      setCurrentSection("/my-stories/published");
    } else if (location.pathname === "/my-stories/drafts") {
      setCurrentSection("/my-stories/drafts");
    }
  }, [location.pathname]);

  return (
    <RootLayout>
      <div className="py-4 mw-1240 mx-auto">
        <div className="d-flex align-items-center justify-content-between px-4">
          <h1 className=" fw-bold">My Stories</h1>
          <Link to="/create" className=" btn text-white bg-dark px-4">
            Write Story
          </Link>
        </div>
        <div className="pt-4 d-flex justify-content-start ps-4 gap-3">
          <Link
            to="/my-stories"
            className={`m-0 text-decoration-none text-black ${
              currentSection === "/my-stories" ? "fw-bold" : ""
            }`}
          >
            All
          </Link>
          <Link
            to="drafts"
            className={`m-0 text-decoration-none text-black ${
              currentSection === "/my-stories/drafts" ? "fw-bold" : ""
            }`}
          >
            Drafts
          </Link>
          <Link
            to="published"
            className={`m-0 text-decoration-none text-black ${
              currentSection === "/my-stories/published" ? "fw-bold" : ""
            }`}
          >
            Published
          </Link>
        </div>
        <hr className="mx-4" />
        <Outlet />
      </div>
    </RootLayout>
  );
};

export default MyStories;
