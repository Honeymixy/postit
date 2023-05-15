/** @format */

import React from "react";
import twitterIcon from "../assets/icons/twitterIcon.png";
import facebookIcon from "../assets/icons/facebookIcon.png";
import linkedIn from "../assets/icons/instagramIcon.png";

const Footer = () => {
  return (
    <footer>
      <div className="main-footer py-5 row gap-4 mx-auto mw-1240">
        <div className="col-lg-4 text-lg-start">
          <h2 className=" fs-5 fw-semibold text-lg-start">
            About Post<span className="text-blue">it.</span>
          </h2>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
            rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
            que maeae tortoere necsem commodo ac.
          </p>
        </div>
        <div className="col-lg-2 text-lg-start">
          <h2>Quick Menu</h2>
          <div className="d-flex flex-column gap-2">
            <p className="m-0">Home</p>
            <p className="m-0">Stories</p>
            <p className="m-0">Trending Stories</p>
            <p className="m-0">Popular Stories</p>
          </div>
        </div>
        <div className="col-lg-1 text-lg-start d-flex gap-2 flex-column align-items-lg-start justify-content-lg-center">
          <p className="m-0">Sign up</p>
          <p className="m-0">Login</p>
          <p className="m-0">Contact Us</p>
        </div>
        <div className="col-lg-4 text-lg-start">
          <h2>Subscribe to our newsletter</h2>
          <div className="d-flex mx-auto bg-white p-1 ps-3 rounded-2">
            <input
              className="input-group border-0"
              type="text"
              placeholder="Email Address"
            />
            <button className="btn text-white btn-bg-main rounded-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-top border-white mt-5 pt-4 text-end d-flex justify-content-end align-items-center gap-5 ">
        <p className="m-0">Terms and Policy</p>
        <div className="d-flex gap-4 align-items-center">
          <img src={twitterIcon} alt="" />
          <img src={facebookIcon} alt="" />
          <img src={linkedIn} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
