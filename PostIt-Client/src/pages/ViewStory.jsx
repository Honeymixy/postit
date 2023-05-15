/** @format */

import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "../utils/Loading";
import RootLayout from "../layouts/RootLayout";
import profilePicture from "../assets/images/profile_picture.png";
import lifestyle from "../assets/images/Lifestyle.png";
import twitter from "../assets/icons/twitter.png";
import facebook from "../assets/icons/facebook.png";
import whatsapp from "../assets/icons/whatsapp.png";

const ViewStory = () => {
  const { token, baseURL } = useContext(AuthContext);

  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `${baseURL}/api/stories/${id}/`,
    token
  );

  return (
    <RootLayout>
      <div>
        {data && (
          <div className="text-start mw-1240 mx-auto px-4 py-3">
            <p className="btn bg-primary text-white">{data.tags}</p>
            <h1 className="fw-bold">{data.title}</h1>
            <div className="d-flex gap-2 align-items-center py-2 border-bottom mb-5 pb-5 ">
              <img src={profilePicture} alt="" />
              <p className="m-0 text-black">
                By <span className=" fw-semibold">{data.author.username}</span>-
                May 21, 2022
              </p>
            </div>
            <img
              style={{
                height: "500px",
              }}
              className="w-100"
              src={lifestyle}
              alt=""
            />
            <p className="py-3">{data.story.slice(0, 50)}</p>
            <div className="py-4 d-flex gap-4 align-items-center">
              <p className="fw-semibold">Share Post:</p>
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={whatsapp} alt="" />
            </div>
          </div>
        )}
        {loading && <Loading />}
        {error && (
          <p className="pt-5 text-blue fw-bold fs-3">
            Oooops! Something Went Wrong, Please Refresh.
          </p>
        )}
      </div>
    </RootLayout>
  );
};

export default ViewStory;
