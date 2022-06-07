import React, { useState } from "react";
import { signIn } from "next-auth/client";
import { toast } from "react-toastify";
import bcrypt from 'bcryptjs';

const LoginForm = ({ login, create }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    let post = {
      name: values.name,
      email: values.email,
      password: bcrypt.hashSync(values.password, bcrypt.genSaltSync()),
    };

    let response = await fetch("http://localhost:3000/api/auth/emaillogin", {
      method: "POST",
      body: JSON.stringify(post),
    });

    let user = await response.json();

    if (user.result == "Successful") {
      values.name = "";
      toast("Created Successfully", {
        toastId: "success",
        theme: "dark",
      });
    } else {
      toast.error("Username already taken", {
        toastId: "failure",
        theme: "dark",
      });
    }

    setValues({ name: "", email: "", password: "" });
  };

  return (
    <>
      <div className="my-10">
        <form className="flex flex-col" onSubmit={login ? handleLogin : handleCreateAccount}>
          <label className="font-semibold">Username</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            pattern={"^[A-Za-z][A-Za-z0-9_]{6,}$"}
            title = {"Invalid Username"}
            placeholder="eg Brusooo22"
            autoComplete={"off"}
            className="border-2 rounded-md w-[140%] h-10 pl-2 border-zinc-400"
          />
          <br />

          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="border-2 rounded-md w-[140%] h-10 pl-2 border-zinc-400"
          />
          <br />

          <label className="font-semibold">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            pattern="[0-9a-zA-Z_@]{6,}"
            title="atleast 6 characters long eg:@user_2022"
            className="border-2 rounded-md w-[140%] h-10 pl-2 border-zinc-400"
          />
          <br />

          {login ? (
            <button
              className="border border-slate-300 w-[50%] p-2 rounded-lg bg-[#2fa8cc] text-white  font-semibold"
              disabled={
                isNaN(values.name) &&
                isNaN(values.email) &&
                isNaN(values.password)
                  ? false
                  : true
              }
            >
              Login
            </button>
          ) : (
            <button
              className={`border border-slate-300 w-[80%] p-2 rounded-lg ${
                create ? "bg-[#2fa8cc]" : "bg-[#09F315]"
              } text-white  font-semibold`}
              disabled={
                isNaN(values.name) &&
                isNaN(values.email) &&
                isNaN(values.password)
                  ? false
                  : true
              }
            >
              Create Account
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginForm;
