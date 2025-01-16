import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Forms() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onSubmit" });

  const [successMsg, setSuccessMsg] = useState("");

  const onSubmit = (data) => {
    setTimeout(() => {
      console.log(data);
      reset();
      setSuccessMsg("form submitted successfully!!!");
      setTimeout(() => {
        setSuccessMsg("");
      }, 5000);
    }, 2000);
  };

  return (
    <div className="bg-purple-400 min-h-screen">
      <h1 className="text-center text-4xl text-red-600 mb-10">Forms</h1>
      <p className="text-lg text-[#0000ff] text-center mb-3">{successMsg}</p>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <input
            {...register("firstname", {
              required: "first name is required",
            })}
            placeholder="firstname"
            className="sm:w-1/2 md:w-1/2 lg:w-1/3 h-10  text-blue-500 rounded-lg focus:outline-none uppercase focus:outline-blue-500 p-2"
            type="text"
          />
          {errors.firstname && (
            <p className="text-red-700 mb-5  ">{errors.firstname?.message}</p>
          )}

          <input
            {...register("lastname", { required: "last name is required" })}
            placeholder="lastname"
            className="mt-5 sm:w-1/2 md:w-1/2 lg:w-1/3 h-10 rounded-lg focus:outline-none uppercase focus:outline-blue-500 p-2 text-blue-500"
            type="text"
          />
          {errors.lastname && (
            <p className="text-red-700 ">{errors.lastname?.message}</p>
          )}

          <input
            placeholder="phone number"
            {...register("phnumber", {
              required: "phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone number must be 10 digits",
              },
            })}
            className="mt-5 sm:w-1/2 md:w-1/2 lg:w-1/3 h-10 rounded-lg focus:outline-none p-2 focus:outline-blue-500 uppercase text-blue-500"
            type="text"
          />
          {errors.phnumber && (
            <p className="text-red-700 ">{errors.phnumber?.message}</p>
          )}

          <input
            placeholder="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="mt-5 sm:w-1/2 md:w-1/2 lg:w-1/3 h-10 rounded-lg focus:outline-none p-2 focus:outline-blue-500  text-blue-500"
            type="text"
          />
          {errors.email && (
            <p className="text-red-700 ">{errors.email?.message}</p>
          )}

          <div className="mt-4">
            <button
              disabled={isSubmitting}
              className="bg-blue-600 px-5 py-2 text-white hover:bg-blue-500 text-lg rounded-lg"
              type="submit"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forms;
