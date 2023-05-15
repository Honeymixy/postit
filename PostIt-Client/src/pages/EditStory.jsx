/** @format */

import React, { useEffect, useContext, useState } from "react";
import RootLayout from "../layouts/RootLayout";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";
import Loading from "../utils/Loading";

const EditStory = () => {
  const { token, baseURL } = useContext(AuthContext);
  const { id } = useParams();

  const { data, loading, error } = useFetch(`${baseURL}/stories/${id}/`, token);

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [story, setStory] = useState("");

  useEffect(() => {
    data && setTitle(data.title);
    data && setTags(data.tags);
    data && setStory(data.story);
    console.log(loading);
  }, [loading]);

  const updateStory = async () => {
    const body = {
      title,
      tags,
      story,
    };
    let response = await fetch(`${baseURL}/stories/${id}/`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      toast.success("done");
    }
  };

  return (
    <RootLayout>
      {data && (
        <div className="px-4 text-sm-start update-story mw-1240 mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateStory();
            }}
            className="d-flex flex-column gap-4 pb-5"
          >
            <div className="d-flex align-items-center border rounded-1 px-2 py-1 ">
              <label className="fw-bolder text-secondary" htmlFor="title">
                Title:
              </label>
              <input
                id="title"
                className="w-100 px-1 py-2 fw-semibold border-0"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center border rounded-1 px-2 py-1">
              <label className="fw-bolder text-secondary" htmlFor="tags">
                Tags:
              </label>
              <input
                id="tags"
                className="w-100 px-1 py-2 fw-semibold border-0"
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className="w-100 p-2 fw-semibold border rounded-1"
                name=""
                id=""
                cols="30"
                rows="10"
                value={story}
                onChange={(e) => setStory(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-bg-main w-50 mx-auto text-white">
              Update Story
            </button>
          </form>
        </div>
      )}

      {loading && <Loading loading={loading} />}

      {error && <p>Ooooops! jSomething went wrong</p>}
    </RootLayout>
  );
};

export default EditStory;
