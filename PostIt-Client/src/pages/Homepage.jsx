/** @format */

import React, { useContext } from "react";
import RootLayout from "../layouts/RootLayout";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import AuthContext from "../context/AuthContext";
import Image from "../assets/images/Nature.png";
import Loading from "../utils/Loading";

const Homepage = () => {
  const { baseURL } = useContext(AuthContext);
  const { data, loading, error } = useFetch(`${baseURL}/api/stories/`);
  console.log(data,"stories");

  return (
    <RootLayout>
      <div className="hero_section text-start">
        <div className="mx-auto px-4 mw-1240">
          <h1 className="fw-bolder py-2">Stay Curious.</h1>
          <p className="fw-semibold">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
          <Link to="signup" className="btn btn-bg text-white btn-bg-main px-4">
            Get Started
          </Link>
        </div>
      </div>

      {data && (
        <div className="d-flex flex-column flex-md-row gap-2 border border-2 border-light my-5 py-5 rounded-2 mx-auto mw-1240">
          {data.slice(0, 3).map((datum) => {
            const { id, title, tags } = datum;
            return (
              <div
                key={id}
                className=" d-flex  align-items-sm-center px-4 gap-3"
              >
                <img src={Image} alt="" className="w-50 rounded-2" />
                <div
                  style={{
                    width: "100%",
                    maxWidth: "120px",
                  }}
                >
                  <p className="m-0 mb-2 bg-primary text-white rounded-3 py-1">
                    {tags}
                  </p>
                  <div className="">
                    <p className="m-0 text-start">{title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {loading && <Loading loading={loading} />}
      {error && (
        <p className="pt-5 text-blue fw-bold fs-3">
          Oooops! Something Went Wrong, Please Refresh.
        </p>
      )}

      <div
        style={{
          width: "90%",
        }}
        className="try-it mx-auto py-4 my-5 mw-1240 px-3"
      >
        <h2 className="fw-bold">
          Try Post<span className="text-blue">It</span>.
        </h2>
        <p className="fw-semibold">
          Do you write or discover stories from writers on any topic?
        </p>
        <div
          style={{
            maxWidth: "600px",
          }}
          className="w-100 mx-auto d-flex"
        >
          <input
            type="text"
            className="w-75 border-0 rounded-start px-3"
            placeholder="Enter Email Address"
          />
          <button className="btn btn-bg-main text-white w-25 rounded-0 rounded-end fs-4 px-1">
            Get Started
          </button>
        </div>
      </div>
    </RootLayout>
  );
};

export default Homepage;