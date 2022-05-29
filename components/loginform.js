import React, { useState } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = ({ active }) => {
  const router = useRouter();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username: values.username,
      email: values.email,
      password: values.password,
    });
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    let post = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    let response = await fetch("http://localhost:3000/api/auth/emaillogin", {
      method: "POST",
      body: JSON.stringify(post)
    });

    let user = await response.json();
    console.log(user);
    if (user.result == "Successful") {
      toast("Created Successfully", {
        toastId: "success",
      });
    } else {
      toast.error("Email already registered", {
        toastId: "failure",
      });
    }
    values.username = values.email = values.password = "";
  };

  return (
    <>
      <ToastContainer />
      <div className="my-10">
        <form className="flex flex-col">
          <label className="font-semibold">Username</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            className="border-2 rounded-md w-[140%] h-10 pl-2 border-zinc-400"
          />
          <br />

          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            title="Invalid emailID"
            className="border-2 rounded-md w-[140%] h-10 pl-2 border-zinc-400"
          />
          <br />

          <label className="font-semibold">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="border-2 rounded-md w-[140%] h-10 pl-2 border-zinc-400"
          />
          <br />

          {active ? (
            <button
              className="border border-slate-300 w-[80%] p-2 rounded-lg bg-[#2fa8cc] text-white  font-semibold"
              disabled={values.email && values.password ? false : true}
              onClick={handleCreateAccount}
            >
              Create Account
            </button>
          ) : (
            <button
              className="border border-slate-300 w-[50%] p-2 rounded-lg bg-[#2fa8cc] text-white  font-semibold"
              disabled={values.email && values.password ? false : true}
              onClick={handleFormSubmit}
            >
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginForm;
