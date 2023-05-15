/** @format */

import React, { useContext } from "react";
import RootLayout from "../layouts/RootLayout";
import editIcon from "../assets/images/edit.png";
import { useForm } from "react-hook-form";
import AuthContext from "../context/AuthContext";

const CreateStory = () => {
  const { token, baseURL } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("working");
    console.log(errors);
    setTimeout(async () => {
      let response = await fetch(`${baseURL}/api/stories/create/`, {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
      }
      let data1 = await response.json();
      console.log(data1);
    }, 1000);
  };

  return (
    <RootLayout>
      <div className="px-4 text-sm-start mw-1240 mx-auto">
        <h1 className="py-3 fw-bold">Create Story</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column gap-4 pb-5"
        >
          <div className=" position-relative">
            <img
              className=" position-absolute bg-white p-1"
              src={editIcon}
              alt=""
            />
            <input
              className="w-100 px-4 py-2 fw-semibold border rounded-1"
              type="text"
              placeholder="Title"
              {...register("title", {
                required: true,
              })}
            />
          </div>
          <div className=" position-relative">
            <img
              className=" position-absolute bg-white p-1"
              src={editIcon}
              alt=""
            />
            <input
              className="w-100 px-4 py-2 fw-semibold border rounded-1"
              type="text"
              placeholder="Tags"
              {...register("tags", {
                required: true,
              })}
            />
          </div>
          <div className=" position-relative">
            <img
              className=" position-absolute bg-white p-1"
              src={editIcon}
              alt=""
            />
            <textarea
              className="w-100 px-4 py-2 fw-semibold border rounded-1"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your story......"
              {...register("story", {
                required: true,
              })}
            ></textarea>
          </div>
          <button className="btn btn-bg-main w-50 mx-auto text-white">
            Publish Story
          </button>
        </form>
      </div>
    </RootLayout>
  );
};

export default CreateStory;
