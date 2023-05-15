/** @format */

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login, authenticating, token } = useContext(AuthContext);
  const isAuthenticating = authenticating ? "spinner-border mx-auto" : "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("working");
    console.log(errors.email);
    login(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="p-5">
      <h2 className=" fw-bold py-4">Welcome Back</h2>
      <form
        className="d-flex flex-column gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="d-flex flex-column gap-1">
          <label className="d-block py-2 fw-semibold" htmlFor="email">
            Your Email Address
          </label>
          <input
            className=" border-0 border-bottom border-secondary border-1 py-2"
            id="email"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className=" text-danger">The field is required!</span>
          )}
          {/* {errors.email && errors.email.type === "minLength" && (
            <p className="text-danger">
              Email should be at-least 6 characters.
            </p>
          )} */}
        </div>
        <div className="d-flex flex-column gap-1">
          <label className="d-block py-2 fw-semibold" htmlFor="password">
            Password
          </label>
          <input
            className=" border-0 border-bottom border-secondary border-1 py-2"
            id="password"
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && (
            <span className="text-danger">The field is required!</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className=" text-danger">
              password should be at-least 6 characters.
            </p>
          )}
        </div>
        <button
          disabled={authenticating}
          className={`btn btn-bg-main text-white my-3 ${isAuthenticating}`}
        >
          Continue
        </button>
      </form>
      <p className="fw-bold">
        No account?
        <Link to="/signup" className="text-decoration-none text-blue ps-2">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
