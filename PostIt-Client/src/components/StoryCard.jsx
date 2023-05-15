/** @format */

import React from "react";
import lifestyle from "../assets/images/Lifestyle.png";
import profilePicture from "../assets/images/profile_picture.png";
import { Link } from "react-router-dom";

const StoryCard = ({ story }) => {
  return (
    <div className="text-start col-sm-6 col-md-4">
      <div className=" position-relative">
        <img className="w-100" src={lifestyle} alt="" />
        <button className="story-tags bg-primary btn text-white px-2 py-0">
          {story.tags}
        </button>
      </div>
      <h2 className="text-black fw-bold pt-3">{story.title}</h2>
      <div className="d-flex gap-2 align-items-center py-2 ">
        <img src={profilePicture} alt="" />
        <p className="m-0 text-black">
          By <span className=" fw-semibold">{story.author.username}</span> - May
          21, 2022
        </p>
      </div>
      <p className="py-3">{story.story}</p>
      <Link to={`/story/${story.id}`} className=" text-decoration-none text-blue">Read More...</Link>
    </div>
  );
};

export default StoryCard;
