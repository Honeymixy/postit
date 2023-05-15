/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useFetch } from "../hooks/useFetch";
import Loading from "../utils/Loading";

const AllUserStories = () => {
  const { token, baseURL } = useContext(AuthContext);

  const { data, error, loading } = useFetch(`${baseURL}/api/stories/user/`, token);

  return (
    <div className="py-4 d-flex flex-column gap-4">
      {loading && <Loading />}
      {!loading &&
        data &&
        data.map((eachStory) => {
          const { id, title, story } = eachStory;
          return (
            <div
              key={id}
              className="d-flex text-start justify-content-between align-items-start px-4"
            >
              <div>
                <h1 className="fw-semibold">{title}</h1>
                <p>{story}</p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <Link
                  to={`/edit/${id}`}
                  className="btn btn-bg-main text-white px-4 fw-semibold"
                >
                  Edit Post
                </Link>
                <button className="btn border-main text-blue fw-semibold px-4">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      {error && (
        <p className="pt-5 text-blue fw-bold fs-3">
          Oooops! Something Went Wrong, Please Refresh.
        </p>
      )}
    </div>
  );
};

export default AllUserStories;
